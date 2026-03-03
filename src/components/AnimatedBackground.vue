<template>
  <div class="absolute inset-0 z-0 overflow-hidden">
    <!-- Base oscura -->
    <div class="absolute inset-0 bg-neutral-950" />

    <!-- Orbes de color (profundidad) -->
    <div class="orb orb-1" />
    <div class="orb orb-2" />

    <!-- Líneas diagonales (estructura) -->

    <!-- Anillos expansivos (detalle) -->
    <div class="ring ring-1" />
    <div class="ring ring-2" />
  </div>
</template>

<style scoped>

/* ── ORBES ─────────────────────────────── */
.orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(100px);
  opacity: 0.10;
  animation: float 14s ease-in-out infinite;
}
.orb-1 {
  width: 600px; height: 600px;
  background:rgb(161, 161, 161);
  top: -150px; left: -100px;
}
.orb-2 {
  width: 450px; height: 450px;
  background:rgb(226, 226, 226);
  bottom: -100px; right: 5%;
  animation-delay: -6s;
}

/* ── ANILLOS ─────────────────────────────── */
.ring {
  position: absolute;
  border-radius: 9999px;
  border: 1px solid rgba(99, 102, 241, 0.15);
  animation: expand-ring 8s ease-out infinite;
}
.ring-1 {
  width: 300px; height: 300px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 0s;
}
.ring-2 {
  width: 300px; height: 300px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -4s; /* desfasado para que se alternen */
}

/* ── KEYFRAMES ─────────────────────────────── */
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(40px, -50px) scale(1.08); }
  66%       { transform: translate(-25px, 25px) scale(0.93); }
}

@keyframes pulse-line {
  0%, 100% { opacity: 0.2; transform: scaleY(1); }
  50%       { opacity: 0.6; transform: scaleY(1.1); }
}

@keyframes expand-ring {
  0%   { transform: translate(-50%, -50%) scale(0.5); opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(3);   opacity: 0; }
}
</style>