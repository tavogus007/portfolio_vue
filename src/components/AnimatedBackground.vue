<template>
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950" />
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="orb orb-3" />
    </div>
  </template>
  
  <style scoped>
  .orb {
    position: absolute;
    border-radius: 9999px;
    filter: blur(100px);
    opacity: 0.12;
    animation: float 14s ease-in-out infinite;
  }
  .orb-1 {
    width: 600px; height: 600px;
    background: #6366f1;
    top: -150px; left: -100px;
    animation-delay: 0s;
  }
  .orb-2 {
    width: 450px; height: 450px;
    background: #8b5cf6;
    bottom: -100px; right: 5%;
    animation-delay: -5s;
  }
  .orb-3 {
    width: 350px; height: 350px;
    background: #3b82f6;
    top: 35%; left: 45%;
    animation-delay: -10s;
  }
  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%       { transform: translate(40px, -50px) scale(1.08); }
    66%       { transform: translate(-25px, 25px) scale(0.93); }
  }
  </style>