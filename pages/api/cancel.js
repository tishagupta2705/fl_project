import React from 'react';

function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-600">Payment Canceled</h1>
      <p className="mt-2">You can try reserving again.</p>
    </div>
  );
}

export default Cancel;
