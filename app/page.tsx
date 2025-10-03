export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#020617', 
      color: '#f8fafc',
      padding: '2rem'
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#22c55e'
      }}>
        Jade Compass Portal
      </h1>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Welcome to the Jade Compass universe - pixel art adventures await!
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{
            border: '2px solid #22c55e',
            padding: '2rem',
            backgroundColor: 'rgba(34, 197, 94, 0.1)'
          }}>
            <h2 style={{ color: '#22c55e', marginBottom: '1rem' }}>Relic Expedition</h2>
            <p>Navigate treacherous dungeons and claim legendary treasures.</p>
          </div>
          
          <div style={{
            border: '2px solid #8b5cf6',
            padding: '2rem',
            backgroundColor: 'rgba(139, 92, 246, 0.1)'
          }}>
            <h2 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Astral Codex</h2>
            <p>Master arcane spells in a vast multiplayer world.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
