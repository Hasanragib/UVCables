import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { PRODUCTS, USE_CASES, IS_STANDARDS, BRAND, INDUSTRIES, HERO_SLIDES } from '../data/index.js';

// ─── Context creation ─────────────────────────────────────────────────────────
const AppContext = createContext(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function AppProvider({ children }) {
  // ── Product filter state ──────────────────────────────────────────────────
  const [filterMode, setFilterMode] = useState('usecase'); // 'usecase' | 'is'
  const [ucFilter,   setUcFilter]   = useState('all');
  const [isFilter,   setIsFilter]   = useState('all');

  // ── Modal state ───────────────────────────────────────────────────────────
  const [activeProduct, setActiveProduct] = useState(null);

  // ── Enquiry list (mini-cart of cables to quote) ───────────────────────────
  const [enquiryList, setEnquiryList] = useState([]);

  // ── UI state ──────────────────────────────────────────────────────────────
  const [toastMsg, setToastMsg] = useState(null); // { text, type }

  // ── Hero slider ───────────────────────────────────────────────────────────
  const [heroSlide, setHeroSlide] = useState(0);

  // ── Computed filtered products ────────────────────────────────────────────
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p =>
      filterMode === 'usecase'
        ? (ucFilter === 'all' || p.useCases.includes(ucFilter))
        : (isFilter === 'all'  || p.isStandards.includes(isFilter))
    );
  }, [filterMode, ucFilter, isFilter]);

  // ── Helpers ───────────────────────────────────────────────────────────────

  const openProduct = useCallback((product) => {
    setActiveProduct(product);
  }, []);

  const closeProduct = useCallback(() => {
    setActiveProduct(null);
  }, []);

  const showToast = useCallback((text, type = 'success') => {
    setToastMsg({ text, type });
    setTimeout(() => setToastMsg(null), 3000);
  }, []);

  const addToEnquiry = useCallback((product) => {
    setEnquiryList(prev => {
      if (prev.find(p => p.id === product.id)) {
        showToast(`${product.label} is already in your enquiry list`, 'info');
        return prev;
      }
      showToast(`${product.label} added to enquiry list`);
      return [...prev, product];
    });
  }, [showToast]);

  const removeFromEnquiry = useCallback((productId) => {
    setEnquiryList(prev => prev.filter(p => p.id !== productId));
  }, []);

  const clearEnquiry = useCallback(() => {
    setEnquiryList([]);
  }, []);

  const isInEnquiry = useCallback((productId) => {
    return enquiryList.some(p => p.id === productId);
  }, [enquiryList]);

  const resetFilters = useCallback(() => {
    setUcFilter('all');
    setIsFilter('all');
  }, []);

  const nextSlide = useCallback(() => {
    setHeroSlide(s => (s + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setHeroSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = useCallback((i) => {
    setHeroSlide(i);
  }, []);

  // ── Derived values ────────────────────────────────────────────────────────
  const activeUCLabel = USE_CASES.find(u => u.id === ucFilter);
  const activeISLabel = IS_STANDARDS.find(s => s.id === isFilter);
  const hasActiveFilter = (filterMode === 'usecase' && ucFilter !== 'all')
                        || (filterMode === 'is'      && isFilter !== 'all');

  // ── Context value (stable shape) ──────────────────────────────────────────
  const value = {
    // Static data
    BRAND,
    PRODUCTS,
    USE_CASES,
    IS_STANDARDS,
    INDUSTRIES,
    HERO_SLIDES,

    // Filter state
    filterMode,    setFilterMode,
    ucFilter,      setUcFilter,
    isFilter,      setIsFilter,
    filteredProducts,
    activeUCLabel,
    activeISLabel,
    hasActiveFilter,
    resetFilters,

    // Modal
    activeProduct,
    openProduct,
    closeProduct,

    // Enquiry list
    enquiryList,
    addToEnquiry,
    removeFromEnquiry,
    clearEnquiry,
    isInEnquiry,
    enquiryCount: enquiryList.length,

    // Toast
    toastMsg,
    showToast,

    // Hero slider
    heroSlide,
    nextSlide,
    prevSlide,
    goToSlide,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}

export default AppContext;
