<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spiritüal Dünya - Ruhani Platform</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Cinzel:wght@400;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'crimson': ['Crimson Text', 'serif'],
                        'cinzel': ['Cinzel', 'serif'],
                        'inter': ['Inter', 'sans-serif']
                    },
                    colors: {
                        'mystic': {
                          50: '#fdf4ff',
                          100: '#fae8ff',
                          200: '#f5d0fe',
                          300: '#f0abfc',
                          400: '#e879f9',
                          500: '#d946ef',
                          600: '#c026d3',
                          700: '#a21caf',
                          800: '#86198f',
                          900: '#701a75',
                        },
                        'sage': {
                          50: '#f6f7f6',
                          100: '#e3e8e3',
                          200: '#c7d2c7',
                          300: '#9fb09f',
                          400: '#7a8f7a',
                          500: '#5d735d',
                          600: '#4a5c4a',
                          700: '#3d4b3d',
                          800: '#343e34',
                          900: '#2d352d',
                        }
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.8s ease-in-out',
                        'slide-up': 'slideUp 0.6s ease-out',
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                        'card-flip': 'cardFlip 0.6s ease-in-out',
                        'shimmer': 'shimmer 2s linear infinite'
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        glow: {
                            '0%': { boxShadow: '0 0 20px rgba(217, 70, 239, 0.3)' },
                            '100%': { boxShadow: '0 0 30px rgba(217, 70, 239, 0.6)' }
                        },
                        cardFlip: {
                            '0%': { transform: 'rotateY(0deg)' },
                            '50%': { transform: 'rotateY(90deg)' },
                            '100%': { transform: 'rotateY(0deg)' }
                        },
                        shimmer: {
                            '0%': { backgroundPosition: '-200% 0' },
                            '100%': { backgroundPosition: '200% 0' }
                        }
                    }
                }
            }
        }
    </script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect, useRef, createContext, useContext } = React;

        // Global State Context
        const AppContext = createContext();

        const AppProvider = ({ children }) => {
            const [currentPage, setCurrentPage] = useState('home');
            const [user, setUser] = useState(null);
            const [cart, setCart] = useState([]);
            const [journalEntries, setJournalEntries] = useState([]);
            const [communityPosts, setCommunityPosts] = useState([
                { id: 1, text: "Bugün çox güclü enerji hiss edirəm 🌟", author: "Ayşə", likes: 12, timestamp: new Date() },
                { id: 2, text: "Yeni Ay ritualı möhtəşəm keçdi, təşəkkürlər! 🌙", author: "Məhəmməd", likes: 8, timestamp: new Date() },
                { id: 3, text: "Kristal meditasiyası həyatımı dəyişdi ✨", author: "Leyla", likes: 15, timestamp: new Date() }
            ]);

            const value = {
                currentPage, setCurrentPage,
                user, setUser,
                cart, setCart,
                journalEntries, setJournalEntries,
                communityPosts, setCommunityPosts
            };

            return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
        };

        const useApp = () => useContext(AppContext);

        // Navigation Component
        const Navigation = () => {
            const { currentPage, setCurrentPage, user, cart } = useApp();
            const [isMenuOpen, setIsMenuOpen] = useState(false);

            const menuItems = [
                { id: 'home', label: 'Ana Səhifə', icon: '🏠' },
                { id: 'shop', label: 'Mağaza', icon: '🛍' },
                { id: 'calendar', label: 'Astro Təqvim', icon: '📅' },
                { id: 'journal', label: 'Jurnalım', icon: '✍' },
                { id: 'mirror', label: 'Ayna Kartı', icon: '🪞' },
                { id: 'rituals', label: 'Ay Ritualları', icon: '🌙' },
                { id: 'community', label: 'İcma Divarı', icon: '💌' }
            ];

            return (
                <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-sage-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div 
                                onClick={() => setCurrentPage('home')}
                                className="font-cinzel text-2xl font-bold bg-gradient-to-r from-mystic-600 to-sage-600 bg-clip-text text-transparent cursor-pointer"
                            >
                                Spiritüal Dünya
                            </div>
                            
                            {/* Desktop Menu */}
                            <div className="hidden lg:flex space-x-6">
                                {menuItems.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => setCurrentPage(item.id)}
                                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                                            currentPage === item.id 
                                                ? 'bg-mystic-100 text-mystic-700' 
                                                : 'text-gray-600 hover:text-mystic-600 hover:bg-mystic-50'
                                        }`}
                                    >
                                        <span>{item.icon}</span>
                                        <span className="font-inter text-sm">{item.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* User Actions */}
                            <div className="flex items-center space-x-4">
                                <button 
                                    onClick={() => setCurrentPage('shop')}
                                    className="relative p-2 text-gray-600 hover:text-mystic-600"
                                >
                                    🛒
                                    {cart.length > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-mystic-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {cart.length}
                                        </span>
                                    )}
                                </button>
                                
                                {user ? (
                                    <button 
                                        onClick={() => setCurrentPage('profile')}
                                        className="flex items-center space-x-2 bg-mystic-100 px-3 py-2 rounded-lg"
                                    >
                                        <span>👤</span>
                                        <span className="font-inter text-sm">{user.name}</span>
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => setCurrentPage('login')}
                                        className="bg-mystic-600 text-white px-4 py-2 rounded-lg font-inter text-sm hover:bg-mystic-700 transition-colors"
                                    >
                                        Giriş
                                    </button>
                                )}

                                {/* Mobile Menu Button */}
                                <button 
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="lg:hidden p-2 text-gray-600"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="lg:hidden pb-4 border-t border-sage-200">
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {menuItems.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setCurrentPage(item.id);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`flex items-center space-x-2 p-3 rounded-lg transition-all ${
                                                currentPage === item.id 
                                                    ? 'bg-mystic-100 text-mystic-700' 
                                                    : 'text-gray-600 hover:bg-mystic-50'
                                            }`}
                                        >
                                            <span>{item.icon}</span>
                                            <span className="font-inter text-sm">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            );
        };

        // Home Page Component
        const HomePage = () => {
            const { setCurrentPage } = useApp();
            const [dailyCards, setDailyCards] = useState([]);
            const [isCardsRevealed, setIsCardsRevealed] = useState(false);

            const tarotMessages = [
                { card: "🌟", title: "Ulduz", message: "Ümidlərinizi yüksək tutun, kainat sizə dəstək verir" },
                { card: "🌙", title: "Ay", message: "Daxili səsinizi dinləyin, intuisiyanız güclüdür" },
                { card: "☀️", title: "Günəş", message: "Uğur və sevinc yolunuzdadır" },
                { card: "🔮", title: "Kristal", message: "Aydınlıq və hikmət axtardığınız cavabları gətirəcək" },
                { card: "🦋", title: "Kəpənək", message: "Transformasiya zamanıdır, dəyişimə açıq olun" },
                { card: "🌸", title: "Çiçək", message: "Yeni başlanğıclar və böyümə sizə gəlir" }
            ];

            const quickActions = [
                { 
                    title: "Ruh halını bilmək istəyirsən?", 
                    subtitle: "Enerji testinə başla",
                    icon: "⚡", 
                    action: () => setCurrentPage('energy-test'),
                    color: "from-yellow-400 to-orange-500"
                },
                { 
                    title: "Sənin ruh heyvanın nədir?", 
                    subtitle: "Ruh heyvanını kəşf et",
                    icon: "🦅", 
                    action: () => setCurrentPage('spirit-animal'),
                    color: "from-green-400 to-blue-500"
                },
                { 
                    title: "Bugün hansı çakran zəifdir?", 
                    subtitle: "Çakra balansını yoxla",
                    icon: "🧘", 
                    action: () => setCurrentPage('chakra-balance'),
                    color: "from-purple-400 to-pink-500"
                },
                { 
                    title: "Özünlə söhbət et", 
                    subtitle: "Ayna kartını aç",
                    icon: "🪞", 
                    action: () => setCurrentPage('mirror'),
                    color: "from-indigo-400 to-purple-500"
                },
                { 
                    title: "Niyyətini bizimlə paylaş", 
                    subtitle: "İcma divarına yaz",
                    icon: "💌", 
                    action: () => setCurrentPage('community'),
                    color: "from-pink-400 to-red-500"
                }
            ];

            const revealDailyCards = () => {
                const shuffled = [...tarotMessages].sort(() => 0.5 - Math.random());
                setDailyCards(shuffled.slice(0, 3));
                setIsCardsRevealed(true);
            };

            useEffect(() => {
                // Auto-reveal cards after 2 seconds
                const timer = setTimeout(() => {
                    if (!isCardsRevealed) {
                        revealDailyCards();
                    }
                }, 2000);
                return () => clearTimeout(timer);
            }, [isCardsRevealed]);

            return (
                <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-mystic-50">
                    {/* Hero Section */}
                    <section className="pt-24 pb-16 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="animate-fade-in">
                                <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                                    Ruhani Yolculuğunuza
                                    <span className="block bg-gradient-to-r from-mystic-600 to-sage-600 bg-clip-text text-transparent">
                                        Xoş Gəlmisiniz
                                    </span>
                                </h1>
                                <p className="font-inter text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Daxili hikmətinizi kəşf edin, ruhunuzun səsini dinləyin və həyatınızın yolunu tapın
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Daily Cards Section */}
                    <section className="py-16 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 animate-slide-up">
                                <h2 className="font-cinzel text-3xl font-bold text-gray-800 mb-4">
                                    Günün Mesajı
                                </h2>
                                <p className="font-inter text-gray-600 mb-8">
                                    Kainatın sizə göndərdiyi 3 xüsusi mesaj
                                </p>
                                
                                {!isCardsRevealed && (
                                    <button
                                        onClick={revealDailyCards}
                                        className="bg-gradient-to-r from-mystic-600 to-sage-600 text-white px-8 py-3 rounded-full font-inter font-medium hover:shadow-lg transition-all duration-300 animate-glow"
                                    >
                                        Kartları Aç ✨
                                    </button>
                                )}
                            </div>

                            {isCardsRevealed && (
                                <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
                                    {dailyCards.map((card, index) => (
                                        <div 
                                            key={index}
                                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-card-flip border border-sage-200"
                                            style={{ animationDelay: `${index * 0.2}s` }}
                                        >
                                            <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                                                {card.card}
                                            </div>
                                            <h3 className="font-cinzel text-xl font-bold text-gray-800 mb-3">
                                                {card.title}
                                            </h3>
                                            <p className="font-inter text-gray-600 leading-relaxed">
                                                {card.message}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section className="py-16 px-4 bg-white/50">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="font-cinzel text-3xl font-bold text-center text-gray-800 mb-12">
                                Ruhani Kəşfiyyat
                            </h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {quickActions.map((action, index) => (
                                    <div
                                        key={index}
                                        onClick={action.action}
                                        className="group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-200 hover:border-mystic-300 animate-slide-up"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                            {action.icon}
                                        </div>
                                        <h3 className="font-cinzel text-lg font-bold text-gray-800 mb-2">
                                            {action.title}
                                        </h3>
                                        <p className="font-inter text-gray-600 text-sm">
                                            {action.subtitle}
                                        </p>
                                        <div className="mt-4 text-mystic-600 font-inter text-sm font-medium group-hover:text-mystic-700">
                                            Başla →
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Featured Content */}
                    <section className="py-16 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="animate-slide-up">
                                    <h2 className="font-cinzel text-3xl font-bold text-gray-800 mb-6">
                                        Ruhani Yolculuğunuz Başlasın
                                    </h2>
                                    <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                                        Tarot kartları, kristal terapiya, çakra balanslaşdırması və daha çox ruhani təcrübə ilə 
                                        özünüzü kəşf edin. Hər gün yeni bir addım atın.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-mystic-600">✨</span>
                                            <span className="font-inter text-gray-700">Günlük tarot mesajları</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-mystic-600">🧘</span>
                                            <span className="font-inter text-gray-700">Çakra balans testləri</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-mystic-600">🌙</span>
                                            <span className="font-inter text-gray-700">Ay ritualları və canlı seanslar</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-mystic-600">📖</span>
                                            <span className="font-inter text-gray-700">Şəxsi ruhani jurnal</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="relative animate-fade-in">
                                    <div className="bg-gradient-to-br from-mystic-100 to-sage-100 rounded-3xl p-8 text-center">
                                        <div className="text-8xl mb-6 animate-float">🔮</div>
                                        <h3 className="font-cinzel text-2xl font-bold text-gray-800 mb-4">
                                            Bugün Nə Hiss Edirsən?
                                        </h3>
                                        <p className="font-inter text-gray-600 mb-6">
                                            Ruh halınızı öyrənin və uyğun rəhbərlik alın
                                        </p>
                                        <button 
                                            onClick={() => setCurrentPage('energy-test')}
                                            className="bg-gradient-to-r from-mystic-600 to-sage-600 text-white px-6 py-3 rounded-full font-inter font-medium hover:shadow-lg transition-all duration-300"
                                        >
                                            Enerji Testini Başlat
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        };

        // Shop Component
        const ShopPage = () => {
            const { cart, setCart } = useApp();
            const [selectedCategory, setSelectedCategory] = useState('all');
            const [searchTerm, setSearchTerm] = useState('');

            const categories = [
                { id: 'all', name: 'Hamısı', icon: '🌟' },
                { id: 'cards', name: 'Tarot Kartları', icon: '🔮' },
                { id: 'books', name: 'Ruhani Kitablar', icon: '📚' },
                { id: 'crystals', name: 'Kristallar', icon: '💎' },
                { id: 'meditation', name: 'Meditasiya', icon: '🧘' },
                { id: 'candles', name: 'Şamlar', icon: '🕯️' }
            ];

            const products = [
                {
                    id: 1,
                    name: "Rider-Waite Tarot Dəsti",
                    category: "cards",
                    price: 45,
                    image: "🔮",
                    description: "Klassik və ən populyar tarot kartları dəsti",
                    rating: 5
                },
                {
                    id: 2,
                    name: "Ametist Kristal",
                    category: "crystals",
                    price: 25,
                    image: "💜",
                    description: "Ruhani qoruma və aydınlıq üçün təbii ametist",
                    rating: 5
                },
                {
                    id: 3,
                    name: "Ruhani İnkişaf Kitabı",
                    category: "books",
                    price: 30,
                    image: "📖",
                    description: "Özünü tanıma və ruhani böyümə üçün təlimat",
                    rating: 4
                },
                {
                    id: 4,
                    name: "Lavanda Meditasiya Şamı",
                    category: "candles",
                    price: 15,
                    image: "🕯️",
                    description: "Rahatlaşdırıcı lavanda ətri ilə təbii şam",
                    rating: 5
                },
                {
                    id: 5,
                    name: "Çakra Balans Dəsti",
                    category: "meditation",
                    price: 60,
                    image: "🌈",
                    description: "7 çakra üçün kristal və meditasiya təlimatı",
                    rating: 5
                },
                {
                    id: 6,
                    name: "Gül Kvarsı",
                    category: "crystals",
                    price: 20,
                    image: "🌸",
                    description: "Sevgi və şəfqət enerjisi üçün gül kvarsı",
                    rating: 4
                }
            ];

            const filteredProducts = products.filter(product => {
                const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
                const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCategory && matchesSearch;
            });

            const addToCart = (product) => {
                setCart(prev => {
                    const existing = prev.find(item => item.id === product.id);
                    if (existing) {
                        return prev.map(item => 
                            item.id === product.id 
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        );
                    }
                    return [...prev, { ...product, quantity: 1 }];
                });
            };

            return (
                <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-mystic-50 pt-24">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="font-cinzel text-4xl font-bold text-gray-800 mb-4">
                                Ruhani Mağaza
                            </h1>
                            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
                                Ruhani yolculuğunuz üçün lazım olan hər şey - tarot kartları, kristallar, kitablar və daha çoxu
                            </p>
                        </div>

                        {/* Search and Filters */}
                        <div className="mb-8">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="relative flex-1 max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Məhsul axtarın..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-mystic-500 focus:border-transparent"
                                    />
                                    <span className="absolute left-3 top-3 text-gray-400">🔍</span>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(category => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                                                selectedCategory === category.id
                                                    ? 'bg-mystic-600 text-white'
                                                    : 'bg-white text-gray-600 hover:bg-mystic-50 border border-sage-200'
                                            }`}
                                        >
                                            <span>{category.icon}</span>
                                            <span className="font-inter text-sm">{category.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-sage-200 group">
                                    <div className="p-6 text-center">
                                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                            {product.image}
                                        </div>
                                        <h3 className="font-cinzel text-lg font-bold text-gray-800 mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="font-inter text-gray-600 text-sm mb-4">
                                            {product.description}
                                        </p>
                                        
                                        {/* Rating */}
                                        <div className="flex justify-center mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={`text-lg ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                    ⭐
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="font-cinzel text-2xl font-bold text-mystic-600">
                                                {product.price} AZN
                                            </span>
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="bg-gradient-to-r from-mystic-600 to-sage-600 text-white px-4 py-2 rounded-lg font-inter text-sm hover:shadow-lg transition-all duration-300"
                                            >
                                                Səbətə At
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="font-cinzel text-xl text-gray-600 mb-2">Məhsul tapılmadı</h3>
                                <p className="font-inter text-gray-500">Axtarış kriteriyalarınızı dəyişdirməyi cəhd edin</p>
                            </div>
                        )}

                        {/* Cart Summary */}
                        {cart.length > 0 && (
                            <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-xl p-4 border border-sage-200">
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">🛒</span>
                                    <div>
                                        <p className="font-inter font-medium text-gray-800">
                                            Səbət: {cart.reduce((sum, item) => sum + item.quantity, 0)} məhsul
                                        </p>
                                        <p className="font-inter text-sm text-gray-600">
                                            Cəmi: {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)} AZN
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };

        // Mirror Card Component
        const MirrorCardPage = () => {
            const [selectedSpread, setSelectedSpread] = useState(null);
            const [revealedCards, setRevealedCards] = useState([]);
            const [isReading, setIsReading] = useState(false);

            const spreads = [
                {
                    id: 'daily',
                    name: 'Günlük Mesaj',
                    description: 'Bugün üçün bir kart',
                    cards: 1,
                    questions: ['Bugün mənim üçün hansı mesaj var?']
                },
                {
                    id: 'insight',
                    name: 'Daxili Baxış',
                    description: 'Özünüzü daha yaxşı anlamaq üçün',
                    cards: 3,
                    questions: [
                        'Sənin bugünkü dərsin nədir?',
                        'Daxilində gizli qalan nədir?',
                        'Sənə hansı mesaj lazımdır?'
                    ]
                }
            ];

            const cardMeanings = [
                { card: '🌟', title: 'Ulduz', message: 'Ümid və rəhbərlik sizinlədir. Yolunuz aydındır.' },
                { card: '🌙', title: 'Ay', message: 'Intuisiyanızı dinləyin. Gizli həqiqətlər açılacaq.' },
                { card: '☀️', title: 'Günəş', message: 'Sevinc və uğur sizə gəlir. Özünüzə inanın.' },
                { card: '🔮', title: 'Kristal', message: 'Aydınlıq və hikmət axtardığınız cavabları verir.' },
                { card: '🦋', title: 'Transformasiya', message: 'Dəyişim zamanıdır. Yenilənməyə hazır olun.' },
                { card: '🌸', title: 'Böyümə', message: 'Yeni imkanlar və başlanğıclar sizə gəlir.' },
                { card: '🕊️', title: 'Sülh', message: 'Daxili harmoniya və sakitlik tapacaqsınız.' },
                { card: '🔥', title: 'Ehtiras', message: 'Daxili alovunuzu yandırın və hərəkətə keçin.' },
                { card: '💎', title: 'Dəyər', message: 'Öz dəyərinizi tanıyın və qiymətləndirin.' }
            ];

            const drawCards = (spread) => {
                setSelectedSpread(spread);
                setIsReading(true);
                
                const shuffled = [...cardMeanings].sort(() => 0.5 - Math.random());
                const drawn = shuffled.slice(0, spread.cards);
                
                setTimeout(() => {
                    setRevealedCards(drawn);
                }, 1000);
            };

            const resetReading = () => {
                setSelectedSpread(null);
                setRevealedCards([]);
                setIsReading(false);
            };

            return (
                <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        {!selectedSpread ? (
                            <div className="text-center">
                                <div className="animate-fade-in">
                                    <div className="text-8xl mb-8 animate-float">🪞</div>
                                    <h1 className="font-cinzel text-4xl font-bold text-gray-800 mb-6">
                                        Özünlə Söhbət Et
                                    </h1>
                                    <p className="font-inter text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                                        Daxili səsinizi dinləyin və özünüzlə dürüst söhbət edin. 
                                        Kartlar sizə lazım olan mesajı çatdıracaq.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {spreads.map(spread => (
                                        <div
                                            key={spread.id}
                                            onClick={() => drawCards(spread)}
                                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-purple-200 hover:border-purple-400 group animate-slide-up"
                                        >
                                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                                {spread.cards === 1 ? '🔮' : '🌟'}
                                            </div>
                                            <h3 className="font-cinzel text-xl font-bold text-gray-800 mb-3">
                                                {spread.name}
                                            </h3>
                                            <p className="font-inter text-gray-600 mb-4">
                                                {spread.description}
                                            </p>
                                            <div className="text-purple-600 font-inter text-sm font-medium">
                                                {spread.cards} kart çək →
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center">
                                <h2 className="font-cinzel text-3xl font-bold text-gray-800 mb-8">
                                    {selectedSpread.name}
                                </h2>

                                {isReading && revealedCards.length === 0 && (
                                    <div className="animate-fade-in">
                                        <div className="text-6xl mb-6 animate-float">🔮</div>
                                        <p className="font-inter text-gray-600 mb-8">
                                            Kartlar qarışdırılır... Niyyətinizi düşünün
                                        </p>
                                        <div className="flex justify-center space-x-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {revealedCards.length > 0 && (
                                    <div className="animate-fade-in">
                                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                                            {revealedCards.map((card, index) => (
                                                <div key={index} className="animate-card-flip" style={{ animationDelay: `${index * 0.3}s` }}>
                                                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200">
                                                        <div className="text-6xl mb-4 animate-float">
                                                            {card.card}
                                                        </div>
                                                        <h3 className="font-cinzel text-lg font-bold text-gray-800 mb-2">
                                                            {card.title}
                                                        </h3>
                                                        <p className="font-inter text-sm text-purple-600 mb-3">
                                                            {selectedSpread.questions[index]}
                                                        </p>
                                                        <p className="font-inter text-gray-600 leading-relaxed">
                                                            {card.message}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                                            <h3 className="font-cinzel text-xl font-bold text-gray-800 mb-4">
                                                Ümumiləşdirmə
                                            </h3>
                                            <p className="font-inter text-gray-700 leading-relaxed">
                                                Bu kartlar sizə daxili hikmətinizin səsini çatdırır. 
                                                Hər mesajı ürəyinizdə hiss edin və həyatınızda necə tətbiq edə biləcəyinizi düşünün.
                                                Unutmayın ki, cavablar həmişə sizin daxilinizdədir.
                                            </p>
                                        </div>

                                        <button
                                            onClick={resetReading}
                                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-inter font-medium hover:shadow-lg transition-all duration-300"
                                        >
                                            Yeni Oxuma
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
        };

        // Community Wall Component
        const CommunityWallPage = () => {
            const { communityPosts, setCommunityPosts, user } = useApp();
            const [newPost, setNewPost] = useState('');
            const [selectedCategory, setSelectedCategory] = useState('all');

            const categories = [
                { id: 'all', name: 'Hamısı', icon: '🌟' },
                { id: 'gratitude', name: 'Təşəkkür', icon: '🙏' },
                { id: 'intention', name: 'Niyyət', icon: '✨' },
                { id: 'experience', name: 'Təcrübə', icon: '🌙' },
                { id: 'question', name: 'Sual', icon: '❓' }
            ];

            const submitPost = (e) => {
                e.preventDefault();
                if (!newPost.trim()) return;

                const post = {
                    id: Date.now(),
                    text: newPost,
                    author: user?.name || 'Anonim',
                    likes: 0,
                    timestamp: new Date(),
                    category: selectedCategory === 'all' ? 'intention' : selectedCategory
                };

                setCommunityPosts(prev => [post, ...prev]);
                setNewPost('');
            };

            const likePost = (postId) => {
                setCommunityPosts(prev => 
                    prev.map(post => 
                        post.id === postId 
                            ? { ...post, likes: post.likes + 1 }
                            : post
                    )
                );
            };

            return (
                <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-24">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4 animate-float">💌</div>
                            <h1 className="font-cinzel text-4xl font-bold text-gray-800 mb-4">
                                İcma Divarı
                            </h1>
                            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
                                Niyyətlərinizi, təşəkkürlərınızı və ruhani təcrübələrinizi icma ilə paylaşın
                            </p>
                        </div>

                        {/* Post Form */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200 mb-8">
                            <form onSubmit={submitPost}>
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {categories.slice(1).map(category => (
                                            <button
                                                key={category.id}
                                                type="button"
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all ${
                                                    selectedCategory === category.id
                                                        ? 'bg-pink-600 text-white'
                                                        : 'bg-pink-50 text-gray-600 hover:bg-pink-100'
                                                }`}
                                            >
                                                <span>{category.icon}</span>
                                                <span>{category.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <textarea
                                        value={newPost}
                                        onChange={(e) => setNewPost(e.target.value)}
                                        placeholder="Niyyətinizi, təşəkkürünüzü və ya təcrübənizi paylaşın..."
                                        className="w-full p-4 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                                        rows="4"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-inter font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    Paylaş ✨
                                </button>
                            </form>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 mb-8 justify-center">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                                        selectedCategory === category.id
                                            ? 'bg-pink-600 text-white'
                                            : 'bg-white text-gray-600 hover:bg-pink-50 border border-pink-200'
                                    }`}
                                >
                                    <span>{category.icon}</span>
                                    <span className="font-inter text-sm">{category.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Posts */}
                        <div className="space-y-6">
                            {communityPosts
                                .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
                                .map(post => (
                                <div key={post.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200 animate-fade-in">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                                                {post.author[0]}
                                            </div>
                                            <div>
                                                <p className="font-inter font-medium text-gray-800">{post.author}</p>
                                                <p className="font-inter text-sm text-gray-500">
                                                    {post.timestamp.toLocaleDateString('az-AZ')}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-2xl">
                                            {categories.find(c => c.id === post.category)?.icon || '✨'}
                                        </span>
                                    </div>
                                    
                                    <p className="font-inter text-gray-700 leading-relaxed mb-4">
                                        {post.text}
                                    </p>
                                    
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={() => likePost(post.id)}
                                            className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
                                        >
                                            <span className="text-xl">❤️</span>
                                            <span className="font-inter text-sm">{post.likes}</span>
                                        </button>
                                        <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                                            <span className="text-xl">🌿</span>
                                            <span className="font-inter text-sm">Dəstək</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {communityPosts.filter(post => selectedCategory === 'all' || post.category === selectedCategory).length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🌸</div>
                                <h3 className="font-cinzel text-xl text-gray-600 mb-2">Hələ paylaşım yoxdur</h3>
                                <p className="font-inter text-gray-500">İlk paylaşımı siz edin!</p>
                            </div>
                        )}
                    </div>
                </div>
            );
        };

        // Login Component
        const LoginPage = () => {
            const { setUser, setCurrentPage } = useApp();
            const [isLogin, setIsLogin] = useState(true);
            const [formData, setFormData] = useState({
                name: '',
                email: '',
                password: ''
            });

            const handleSubmit = (e) => {
                e.preventDefault();
                // Simulate login/register
                const userData = {
                    name: formData.name || formData.email.split('@')[0],
                    email: formData.email
                };
                setUser(userData);
                setCurrentPage('home');
            };

            return (
                <div className="min-h-screen bg-gradient-to-br from-mystic-50 via-white to-sage-50 pt-24 flex items-center justify-center">
                    <div className="max-w-md w-full mx-4">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-mystic-200">
                            <div className="text-center mb-8">
                                <div className="text-6xl mb-4 animate-float">🔮</div>
                                <h2 className="font-cinzel text-2xl font-bold text-gray-800 mb-2">
                                    {isLogin ? 'Xoş Gəlmisiniz' : 'Qeydiyyat'}
                                </h2>
                                <p className="font-inter text-gray-600">
                                    {isLogin ? 'Hesabınıza daxil olun' : 'Yeni hesab yaradın'}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {!isLogin && (
                                    <div>
                                        <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                                            Ad Soyad
                                        </label>
                                        <input
                                            type="text"
                                            required={!isLogin}
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mystic-500 focus:border-transparent"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mystic-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                                        Şifrə
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mystic-500 focus:border-transparent"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-mystic-600 to-sage-600 text-white py-3 rounded-lg font-inter font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    {isLogin ? 'Daxil Ol' : 'Qeydiyyat'}
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="font-inter text-sm text-mystic-600 hover:text-mystic-700"
                                >
                                    {isLogin ? 'Hesabınız yoxdur? Qeydiyyat' : 'Hesabınız var? Daxil olun'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // Simple placeholder components for other pages
        const CalendarPage = () => (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
                <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                    <div className="text-6xl mb-4 animate-float">📅</div>
                    <h1 className="font-cinzel text-4xl font-bold text-gray-800 mb-4">Astro Təqvim</h1>
                    <p className="font-inter text-gray-600">Tezliklə...</p>
                </div>
            </div>
        );

        const JournalPage = () => (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24">
                <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                    <div className="text-6xl mb-4 animate-float">✍</div>
                    <h1 className="font-cinzel text-4xl font-bold text-gray-800 mb-4">Şəxsi Jurnal</h1>
                    <p className="font-inter text-gray-600">Tezliklə...</p>
                </div>
            </div>
        );

        const RitualsPage = () => (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-24">
                <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                    <div className="text-6xl mb-4 animate-float">🌙</div>
                    <h1 className="font-cinzel text-4xl font-bold text-gray-800 mb-4">Ay Ritualları</h1>
                    <p className="font-inter text-gray-600">Tezliklə...</p>
                </div>
            </div>
        );

        // Main App Component
        const App = () => {
            const { currentPage } = useApp();

            const renderPage = () => {
                switch(currentPage) {
                    case 'home': return <HomePage />;
                    case 'shop': return <ShopPage />;
                    case 'calendar': return <CalendarPage />;
                    case 'journal': return <JournalPage />;
                    case 'mirror': return <MirrorCardPage />;
                    case 'rituals': return <RitualsPage />;
                    case 'community': return <CommunityWallPage />;
                    case 'login': return <LoginPage />;
                    default: return <HomePage />;
                }
            };

            return (
                <div className="font-inter">
                    <Navigation />
                    {renderPage()}
                </div>
            );
        };

        // Render App
        ReactDOM.render(
            <AppProvider>
                <App />
            </AppProvider>, 
            document.getElementById('root')
        );
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96771b4c5430dbd2',t:'MTc1MzkwMjEwNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
