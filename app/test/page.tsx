export default function TestPage() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Test Page</h1>
      <p>If you can see this, the basic routing works.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '2px solid #22c55e' }}>
        <p>Testing Jade Colors</p>
        <div style={{ width: '100px', height: '100px', backgroundColor: '#22c55e', marginTop: '1rem' }}></div>
      </div>
    </div>
  );
}