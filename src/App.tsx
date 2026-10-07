import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  CircleUserRound,
  HandPlatter,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Star,
  X,
} from 'lucide-react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  accent: string;
};

const heroSlides = [
  {
    id: 1,
    eyebrow: 'Scoop Happiness',
    headline: 'SCOOP\nHAPPINESS',
    subtitle: 'Strawberry ice cream',
    copy: 'Handcrafted ice cream made with rich ingredients, playful flavors, and a whole lot of love.',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    eyebrow: 'Taste the Magic',
    headline: 'SWEET\nSURPRISES',
    subtitle: 'Vanilla bean ice cream',
    copy: 'Silky, cloud-like scoops with real vanilla bean and a naturally creamy finish.',
    image:
      'https://images.unsplash.com/photo-1570197788417-0e823ef4b261?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    eyebrow: 'Made for Sweet Moments',
    headline: 'PURE\nINDULGENCE',
    subtitle: 'Chocolate fudge ice cream',
    copy: 'Dark cocoa richness, luscious ribbons of fudge, and a deeply satisfying finish.',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    eyebrow: 'Fresh. Creamy. Delicious.',
    headline: 'MANGO\nMOONBEAM',
    subtitle: 'Mango ice cream',
    copy: 'Sun-ripened fruit and velvety dairy create a bright, tropical scoop that feels effortless.',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
  },
];

const products: Product[] = [
  {
    id: 1,
    name: 'Strawberry Bliss',
    description: 'Juicy strawberry swirls with soft cream and real fruit pieces.',
    price: 7.5,
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    accent: '#F38BB8',
  },
  {
    id: 2,
    name: 'Vanilla Bean',
    description: 'Velvety, aromatic vanilla bean crafted for a smooth classic finish.',
    price: 6.8,
    image:
      'https://images.unsplash.com/photo-1570197788417-0e823ef4b261?auto=format&fit=crop&w=900&q=80',
    accent: '#F9D8E7',
  },
  {
    id: 3,
    name: 'Chocolate Fudge',
    description: 'Dense cocoa richness with ribbons of fudge and toasted notes.',
    price: 7.9,
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    accent: '#E8C1A9',
  },
  {
    id: 4,
    name: 'Mango Tango',
    description: 'Bright tropical mango with a silky finish and sunshine sweetness.',
    price: 7.2,
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
    accent: '#FDBB74',
  },
  {
    id: 5,
    name: 'Pistachio Dream',
    description: 'Nutty pistachio cream with a naturally elegant, buttery texture.',
    price: 8.4,
    image:
      'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=900&q=80',
    accent: '#BFE8C5',
  },
  {
    id: 6,
    name: 'Cookies & Cream',
    description: 'Crisp cookie bits folded into sweet cream and cocoa cookies.',
    price: 7.6,
    image:
      'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80',
    accent: '#D9C1A0',
  },
];

const services = [
  {
    title: 'Birthday Parties',
    description: 'Custom ice cream packages for unforgettable celebrations.',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Weddings & Events',
    description: 'Elegant dessert experiences designed for special occasions.',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Corporate Catering',
    description: 'Premium ice cream catering for teams, launches and events.',
    image:
      'https://images.unsplash.com/photo-1576502200320-7a7fb0bd8b8c?auto=format&fit=crop&w=800&q=80',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1570197788417-0e823ef4b261?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=900&q=80',
];

const blogPosts = [
  {
    category: 'Craft',
    title: 'How We Make Our Ice Cream',
    excerpt: 'From small-batch churning to fresh fruit mixing, every scoop starts with thoughtful detail.',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Flavors',
    title: '5 Flavors Perfect for Summer',
    excerpt: 'Cool, bright, creamy picks for warm nights, slow afternoons, and easy celebrations.',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Secrets',
    title: 'The Secret Behind Creamy Ice Cream',
    excerpt: 'Balanced dairy, slow churn, and precise temperature control make every bite smooth.',
    image:
      'https://images.unsplash.com/photo-1570197788417-0e823ef4b261?auto=format&fit=crop&w=900&q=80',
  },
];

const testimonials = [
  {
    name: 'Maya R.',
    text: 'Absolutely delicious. The strawberry flavor tastes incredibly fresh, and the texture is perfect.',
  },
  {
    name: 'Daniel K.',
    text: 'The vanilla bean is unbelievably smooth, and the packaging is so thoughtful for gifting.',
  },
  {
    name: 'Jamie L.',
    text: 'We ordered catering for our office launch and everyone asked where the ice cream came from.',
  },
];

const features = [
  {
    title: 'Premium Ingredients',
    text: 'Fresh dairy, real fruit and carefully selected ingredients.',
    icon: HandPlatter,
  },
  {
    title: 'Handmade Daily',
    text: 'Small-batch preparation for better flavor and texture.',
    icon: Heart,
  },
  {
    title: 'Creative Flavors',
    text: 'Classic favorites and exciting seasonal combinations.',
    icon: Star,
  },
  {
    title: 'Delivered Fresh',
    text: 'Carefully packed so every scoop arrives delicious.',
    icon: ShoppingBag,
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [featureQty, setFeatureQty] = useState(1);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Strawberry Bliss', quantity: 1, price: 7.5, image: products[0].image },
  ]);
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [newsletterMessage, setNewsletterMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setCartOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (item: Product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + quantity } : entry,
        );
      }
      return [...current, { id: item.id, name: item.name, price: item.price, quantity, image: item.image }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: number, direction: 'inc' | 'dec') => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: direction === 'inc' ? item.quantity + 1 : Math.max(item.quantity - 1, 0) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get('email')?.toString() || '';

    if (!email || !email.includes('@')) {
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterMessage('You’re on the list for fresh scoops and sweet updates.');
    form.reset();
  };

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = (formData.get('name') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const phone = (formData.get('phone') as string)?.trim() || '';
    const message = (formData.get('message') as string)?.trim() || '';

    if (!name) nextErrors.name = 'Please enter your name.';
    if (!email || !email.includes('@')) nextErrors.email = 'Please enter a valid email.';
    if (!phone) nextErrors.phone = 'Please add a contact number.';
    if (!message || message.length < 12) nextErrors.message = 'Message should be at least 12 characters.';

    setContactErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      event.currentTarget.reset();
      setContactErrors({});
      alert('Thanks! We’ll be in touch with a sweet response shortly.');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="#home" className="brand" aria-label="Velvet Scoop home">
            <span className="brand-word">VELVET</span>
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-word">SCOOP</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {['Home', 'About', 'Flavors', 'Menu', 'Services', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="text-btn" type="button">
              Login
            </button>
            <button className="icon-btn" type="button" aria-label="Your account">
              <CircleUserRound size={18} />
            </button>
            <button
              className="icon-btn"
              type="button"
              aria-label="Search our flavors"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <Search size={18} />
            </button>
            <button className="cart-btn" type="button" aria-label="Open cart" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={18} />
              <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </button>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {searchOpen && (
          <div className="search-panel container">
            <div className="search-box">
              <Search size={18} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search flavors..."
                aria-label="Search flavors"
              />
            </div>
            <div className="search-results">
              {searchResults.slice(0, 4).map((product) => (
                <button key={product.id} className="search-item" type="button" onClick={() => addToCart(product, 1)}>
                  <span>{product.name}</span>
                  <span>${product.price.toFixed(2)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="mobile-menu" role="dialog" aria-modal="true">
            <nav>
              {['Home', 'About', 'Flavors', 'Menu', 'Services', 'Blog', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">{heroSlides[activeHeroIndex].eyebrow}</p>
              <h1>{heroSlides[activeHeroIndex].headline}</h1>
              <p className="hero-subtitle">{heroSlides[activeHeroIndex].subtitle}</p>
              <p className="lead">{heroSlides[activeHeroIndex].copy}</p>

              <div className="cta-row">
                <button type="button" className="primary-btn" onClick={() => addToCart(products[0], 1)}>
                  Order Now
                </button>
                <a href="#flavors" className="secondary-link">
                  Explore Flavors <ArrowRight size={16} />
                </a>
              </div>

              <div className="hero-indicators" aria-label="Hero slider indicators">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={index === activeHeroIndex ? 'indicator active' : 'indicator'}
                    aria-label={`View slide ${index + 1}`}
                    onClick={() => setActiveHeroIndex(index)}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="hero-orb" aria-hidden="true" />
              <img src={heroSlides[activeHeroIndex].image} alt={heroSlides[activeHeroIndex].subtitle} />
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-visual" data-reveal>
              <div className="decor-circle pale-yellow" aria-hidden="true" />
              <div className="decor-circle pale-pink" aria-hidden="true" />
              <div className="mini-dot dot-one" aria-hidden="true" />
              <div className="mini-dot dot-two" aria-hidden="true" />
              <img
                src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1200&q=80"
                alt="Colorful mixed scoops in a ceramic bowl"
              />
            </div>

            <div className="about-copy" data-reveal>
              <p className="eyebrow accent">OUR STORY</p>
              <h2>Made With Love, Scooped With Joy</h2>
              <div className="accent-line" aria-hidden="true" />
              <p>
                Every scoop starts with carefully selected ingredients, rich dairy, vibrant fruits, and a passion for
                making simple moments sweeter.
              </p>
              <p>
                We craft each batch in small runs, blending premium dairy with fresh fruit, slow-churned textures, and a
                playful sense of creativity. The result is a scoop that feels indulgent, comforting, and genuinely special.
              </p>
              <button type="button" className="primary-btn secondary-btn" onClick={() => setCartOpen(true)}>
                Discover Our Story
              </button>
            </div>
          </div>
        </section>

        <section className="flavors section" id="flavors">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Our Favorite Flavors</p>
              <h2>Our Favorite Flavors</h2>
              <p>
                From timeless classics to exciting new creations, there’s a scoop for every mood.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article key={product.id} className="flavor-card" data-reveal>
                  <div className="product-image-wrap" style={{ background: product.accent }}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-card-body">
                    <div className="product-meta">
                      <h3>{product.name}</h3>
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                    <p>{product.description}</p>
                    <button type="button" className="add-btn" onClick={() => addToCart(product, 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signature section">
          <div className="container signature-shell" data-reveal>
            <div className="signature-visual">
              <img
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1200&q=80"
                alt="Signature strawberry cream dessert"
              />
            </div>

            <div className="signature-copy">
              <p className="eyebrow accent">SIGNATURE SCOOP</p>
              <h2>Strawberry Cream Delight</h2>
              <p>
                Silky strawberry ice cream blended with real fruit pieces and finished with a creamy swirl.
              </p>

              <div className="signature-meta">
                <div className="price-row">
                  <strong>$12.90</strong>
                  <div className="stars" aria-label="5 star rating">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>

                <ul>
                  <li>Fresh strawberry fruit</li>
                  <li>Velvety cream texture</li>
                  <li>Small-batch churned</li>
                </ul>
              </div>

              <div className="purchase-row">
                <div className="qty-selector" aria-label="Product quantity selector">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setFeatureQty((q) => Math.max(1, q - 1))}>
                    <Minus size={16} />
                  </button>
                  <span>{featureQty}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => setFeatureQty((q) => q + 1)}>
                    <Plus size={16} />
                  </button>
                </div>

                <button type="button" className="primary-btn" onClick={() => addToCart(products[0], featureQty)}>
                  Add to Cart
                </button>
                <button type="button" className="secondary-btn alt-button">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="why-us section" id="menu">
          <div className="container">
            <div className="section-heading center" data-reveal>
              <p className="eyebrow">Why Velvet Scoop?</p>
              <h2>Why Velvet Scoop?</h2>
            </div>

            <div className="feature-grid">
              {features.map(({ title, text, icon: Icon }) => (
                <div key={title} className="feature-card" data-reveal>
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <div className="feature-index">0{features.indexOf(features.find((feature) => feature.title === title)!)+1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Sweet Moments</p>
              <h2>Sweet Moments, Made Special</h2>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card" data-reveal>
                  <img src={service.image} alt={service.title} />
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact">
                      Learn More <ChevronRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="promo section">
          <div className="container promo-panel" data-reveal>
            <div className="promo-copy">
              <h2>Your Next Favorite Scoop Is Waiting</h2>
              <p>Order your favorite flavor today and turn an ordinary moment into something sweet.</p>
              <div className="promo-actions">
                <button type="button" className="primary-btn">
                  Order Ice Cream
                </button>
                <a href="#flavors" className="secondary-link dark-link">
                  View Menu <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="promo-visual" aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1570197788417-0e823ef4b261?auto=format&fit=crop&w=800&q=80"
                alt="Promotional ice cream cone"
              />
            </div>
            <div className="promo-blobs" aria-hidden="true">
              <span className="blob blob-one" />
              <span className="blob blob-two" />
            </div>
          </div>
        </section>

        <section className="reviews section" id="blog">
          <div className="container">
            <div className="section-heading center" data-reveal>
              <p className="eyebrow">Sweet Words</p>
              <h2>Sweet Words From Our Customers</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((review) => (
                <article key={review.name} className="review-card" data-reveal>
                  <div className="review-top">
                    <div className="avatar">{review.name.charAt(0)}</div>
                    <div>
                      <strong>{review.name}</strong>
                      <div className="stars" aria-label="Five star review">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <p>“{review.text}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery section">
          <div className="container">
            <div className="section-heading center" data-reveal>
              <p className="eyebrow">A Little Scoop of Happiness</p>
              <h2>A Little Scoop of Happiness</h2>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <figure key={index} className={`gallery-item item-${index + 1}`} data-reveal>
                  <img src={image} alt="Velvet Scoop dessert moment" />
                  <div className="gallery-hover">
                    <Instagram size={20} />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="blog section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">From Our Journal</p>
              <h2>From Our Journal</h2>
            </div>

            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <article key={post.title} className="blog-card" data-reveal>
                  <img src={post.image} alt={post.title} />
                  <div className="blog-body">
                    <span className="blog-number">0{index + 1}</span>
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a href="#contact">
                      Read More <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter section">
          <div className="container newsletter-shell" data-reveal>
            <p className="eyebrow">Sweet Notes</p>
            <h2>Get the Sweet News</h2>
            <p>Sign up for new flavors, special offers, seasonal treats and delicious updates.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input id="newsletter-email" name="email" type="email" placeholder="Enter your email address" />
              <button type="submit" className="primary-btn">
                Subscribe
              </button>
            </form>
            {newsletterMessage && <p className="newsletter-message">{newsletterMessage}</p>}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container form-grid">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow accent">Let’s Talk</p>
              <h2>Let’s Make Something Sweet</h2>
              <p>
                Whether you’re planning a birthday, a wedding dessert table, or a weekly flavor run, we’d love to help.
              </p>

              <div className="contact-list">
                <div>
                  <span>Phone</span>
                  <strong>+1 (800) 555-0124</strong>
                </div>
                <div>
                  <span>Email</span>
                  <strong>hello@velvetscoop.com</strong>
                </div>
                <div>
                  <span>Address</span>
                  <strong>214 Rose Avenue, Los Angeles, CA</strong>
                </div>
                <div>
                  <span>Opening hours</span>
                  <strong>Mon – Sun • 10:00 AM – 9:00 PM</strong>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit} noValidate data-reveal>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" />
                {contactErrors.name && <span className="error-text">{contactErrors.name}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Your email address" />
                {contactErrors.email && <span className="error-text">{contactErrors.email}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                {contactErrors.phone && <span className="error-text">{contactErrors.phone}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us what you’re planning" />
                {contactErrors.message && <span className="error-text">{contactErrors.message}</span>}
              </div>

              <button type="submit" className="primary-btn submit-btn">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand footer-logo">
              <span className="brand-word">VELVET</span>
              <span className="brand-mark" aria-hidden="true" />
              <span className="brand-word">SCOOP</span>
            </div>
            <p>Handcrafted premium ice cream with rich textures, joyful flavors, and a whole lot of heart.</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              {['Home', 'About', 'Flavors', 'Menu', 'Services', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Customer Care</h3>
            <ul>
              {['FAQ', 'Delivery', 'Returns', 'Privacy Policy', 'Terms'].map((link) => (
                <li key={link}>
                  <a href="#contact">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>+1 (800) 555-0124</li>
              <li>hello@velvetscoop.com</li>
              <li>214 Rose Avenue, Los Angeles, CA</li>
            </ul>
          </div>

          <div>
            <h3>Social</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>TikTok</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© 2026 Velvet Scoop. All rights reserved.</span>
          </div>
        </div>
      </footer>

      <aside className={cartOpen ? 'cart-drawer open' : 'cart-drawer'} aria-label="Shopping cart">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button type="button" className="icon-btn" aria-label="Close cart" onClick={() => setCartOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-state">Your cart is empty. Add a delicious scoop to get started.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-body">
                  <div>
                    <strong>{item.name}</strong>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-selector compact">
                      <button type="button" onClick={() => updateQty(item.id, 'dec')} aria-label={`Decrease quantity for ${item.name}`}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => updateQty(item.id, 'inc')} aria-label={`Increase quantity for ${item.name}`}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button type="button" className="remove-link" onClick={() => updateQty(item.id, 'dec')}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>
          <button type="button" className="primary-btn full-width">
            Checkout
          </button>
        </div>
      </aside>

      <button type="button" className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowRight size={16} />
      </button>
    </>
  );
}

export default App;
