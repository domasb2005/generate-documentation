import React from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';
import { testCases } from './TestCases';

export function TestApp() {
  return (
    <div style={{ 
      padding: '40px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '30px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>      
      {/* I used chat gpt to create this fancy map for the repetative buttton layout */}
      {Object.keys(testCases).map(testId => {
        const glowRef = useGlowHover(testCases[testId]);
        return (
          <div key={testId} style={{ marginBottom: '20px' }}>
            <h3>{testId}</h3>
            <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
              {JSON.stringify(testCases[testId], null, 2)}
            </pre>
            <button 
              ref={glowRef} 
              data-testid={testId} 
              style={{
                padding: '20px 40px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                cursor: 'pointer',
                background: 'white'
              }}
            >
             {testId}
            </button>
          </div>
        );
      })}
    </div>
  );
}