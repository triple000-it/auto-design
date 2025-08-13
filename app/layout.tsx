import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Auto Design | Volledig op maat gemaakt en meer...',
  description: 'Bijvoorbeeld voor een autobanden service, een dealership, een garage, export, import, inkoop, veiling, verkoop of een andere vorm van autohandel...',
  keywords: 'e-commerce, webshop, website, grafisch design, marketing, social media, roas, adverteren',
  authors: [{ name: 'Team Auto Design' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/Favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/Favicon.png', type: 'image/png' },
    ],
    shortcut: '/Favicon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Auto Design',
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'Auto Design | Volledig op maat gemaakt en meer...',
    description: 'Bijvoorbeeld voor een autobanden service, een dealership, een garage, export, import, inkoop, veiling, verkoop of een andere vorm van autohandel...',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Auto Design',
    images: [
      {
        url: '/Favicon.png',
        width: 1200,
        height: 630,
        alt: 'Auto Design Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Design | Volledig op maat gemaakt en meer...',
    description: 'Bijvoorbeeld voor een autobanden service, een dealership, een garage, export, import, inkoop, veiling, verkoop of een andere vorm van autohandel...',
    images: ['/Favicon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        {/* Primary favicon */}
        <link rel="icon" href="/Favicon.png" type="image/png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/Favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="/Favicon.png" />
        
        {/* Windows Tiles */}
        <meta name="msapplication-TileImage" content="/Favicon.png" />
        <meta name="msapplication-TileColor" content="#3c2774" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/Favicon.png" color="#3c2774" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#3c2774" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Auto Design" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable right-click context menu
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                showCustomPopup('Auto Design © 2013 - 2025');
              });

              // Disable keyboard shortcuts
              document.addEventListener('keydown', function(e) {
                // Disable Ctrl+U (View Source)
                if (e.ctrlKey && e.key === 'u') {
                  e.preventDefault();
                  showCustomPopup('Auto Design © 2013 - 2025');
                  return false;
                }
                // Disable F12
                if (e.key === 'F12') {
                  e.preventDefault();
                  showCustomPopup('Auto Design © 2013 - 2025');
                  return false;
                }
                // Disable Ctrl+Shift+I (Developer Tools)
                if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                  e.preventDefault();
                  showCustomPopup('Auto Design © 2013 - 2025');
                  return false;
                }
                // Disable Ctrl+Shift+C (Developer Tools)
                if (e.ctrlKey && e.shiftKey && e.key === 'C') {
                  e.preventDefault();
                  showCustomPopup('Auto Design © 2013 - 2025');
                  return false;
                }
                // Disable Ctrl+Shift+J (Developer Tools)
                if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                  e.preventDefault();
                  showCustomPopup('Auto Design © 2013 - 2025');
                  return false;
                }
                // Disable Ctrl+S (Save Page)
                if (e.ctrlKey && e.key === 's') {
                  e.preventDefault();
                  showCustomPopup('Auto Design © 2013 - 2025');
                  return false;
                }
                // Disable Ctrl+P (Print)
                if (e.ctrlKey && e.key === 'p') {
                  e.preventDefault();
                  showCustomPopup('Auto Design © 2013 - 2025');
                  return false;
                }
              });

              // Disable text selection
              document.addEventListener('selectstart', function(e) {
                e.preventDefault();
                return false;
              });

              // Disable drag and drop
              document.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
              });

              // Custom popup function
              function showCustomPopup(message) {
                // Remove existing popup if any
                const existingPopup = document.getElementById('custom-popup');
                if (existingPopup) {
                  existingPopup.remove();
                }

                // Create popup
                const popup = document.createElement('div');
                popup.id = 'custom-popup';
                popup.style.cssText = \`
                  position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background: #4a4a4a;
                  color: white;
                  padding: 20px 30px;
                  border-radius: 10px;
                  font-family: 'Inter', sans-serif;
                  font-size: 16px;
                  font-weight: 600;
                  z-index: 10000;
                  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                  border: 2px solid #3c2774;
                  animation: popupFadeIn 0.3s ease-out;
                \`;
                popup.textContent = message;

                // Add animation styles
                const style = document.createElement('style');
                style.textContent = \`
                  @keyframes popupFadeIn {
                    from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                  }
                \`;
                document.head.appendChild(style);

                // Add to page
                document.body.appendChild(popup);

                // Remove popup after 3 seconds
                setTimeout(() => {
                  if (popup.parentNode) {
                    popup.style.animation = 'popupFadeOut 0.3s ease-out';
                    popup.style.cssText += \`
                      @keyframes popupFadeOut {
                        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                        to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                      }
                    \`;
                    setTimeout(() => {
                      if (popup.parentNode) {
                        popup.remove();
                      }
                    }, 300);
                  }
                }, 3000);
              }

              // Disable developer tools (additional protection)
              setInterval(function() {
                debugger;
              }, 100);
            `,
          }}
        />
      </head>
      <body className="bg-gray-50">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
} 