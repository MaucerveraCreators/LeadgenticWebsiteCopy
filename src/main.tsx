import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode }, 
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          minHeight: '100vh', 
          backgroundColor: '#000000', 
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#ff4444' }}>Error al cargar</h1>
          <p style={{ marginBottom: '10px' }}>Ha ocurrido un error:</p>
          <pre style={{ 
            background: '#222', 
            padding: '15px', 
            borderRadius: '8px',
            maxWidth: '80%',
            overflow: 'auto',
            fontSize: '14px'
          }}>
            {this.state.error?.message || 'Error desconocido'}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#70E000',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Recargar página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading fallback
function LoadingFallback() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Leadgentic</h1>
      <p style={{ fontSize: '24px', color: '#70E000' }}>The AI Revenue Platform</p>
      <p style={{ marginTop: '20px', opacity: 0.7 }}>Cargando aplicación...</p>
    </div>
  );
}

// Initialize app
async function initializeApp() {
  const root = document.getElementById('root');
  
  if (!root) {
    console.error('Root element not found');
    document.body.innerHTML = '<div style="color: red; padding: 20px; background: white;">ERROR: No se encontró el elemento root</div>';
    return;
  }

  // Show loading state
  const rootInstance = createRoot(root);
  rootInstance.render(<LoadingFallback />);

  try {
    // Import App dynamically
    const appModule = await import('./app/App');
    const App = appModule.default;

    // Render the actual app
    rootInstance.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error al importar App:', error);
    
    // Show error state
    rootInstance.render(
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#000000', 
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#ff4444' }}>Error al cargar la aplicación</h1>
        <p style={{ marginBottom: '10px' }}>No se pudo cargar la aplicación:</p>
        <pre style={{ 
          background: '#222', 
          padding: '15px', 
          borderRadius: '8px',
          maxWidth: '80%',
          overflow: 'auto',
          fontSize: '14px'
        }}>
          {error instanceof Error ? error.message : 'Error desconocido'}
        </pre>
        <button 
          onClick={() => window.location.reload()} 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#70E000',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Recargar página
        </button>
      </div>
    );
  }
}

// Start the app
initializeApp();
