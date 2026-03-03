<template>
    <div ref="mountRef" class="w-full h-full" />
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
  import * as THREE from 'three'
  
  const mountRef = ref(null)
  
  let renderer, scene, camera, animationId
  let mesh, wireframe

  function getResponsiveScale() {
  const width = window.innerWidth

  if (width < 640) return 0.9      // móvil
  if (width < 1024) return 1.2     // tablet
  return 1.4                       // desktop
}
  
  onMounted(async() => {
    await nextTick()
    let width  = mountRef.value.clientWidth
    let height = mountRef.value.clientHeight

    if (height === 0) {
       height = window.innerHeight * 0.6
    }
  
    // ── Escena base ──────────────────────────────
    scene    = new THREE.Scene()
    camera   = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = 4
  
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.value.appendChild(renderer.domElement)
  
    // ── Geometría: icosaedro (cristal/diamante) ──
    let baseSize = getResponsiveScale()
    const geometry = new THREE.IcosahedronGeometry(baseSize, 1)
  
    // Cara sólida semitransparente
    const material = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      metalness: 0.3,
      roughness: 0.2,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    })
  
    // Wireframe encima
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    })
  
    mesh      = new THREE.Mesh(geometry, material)
    wireframe = new THREE.Mesh(geometry, wireMat)
  
    scene.add(mesh)
    scene.add(wireframe)
  
    // ── Luces ────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambient)
  
    const point1 = new THREE.PointLight(0x6366f1, 2, 10)
    point1.position.set(3, 3, 3)
    scene.add(point1)
  
    const point2 = new THREE.PointLight(0x8b5cf6, 1.5, 10)
    point2.position.set(-3, -2, -3)
    scene.add(point2)
  
    // ── Partículas alrededor ─────────────────────
    const particles = new THREE.BufferGeometry()
    const count = 200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 8
    }
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
    })
    const points = new THREE.Points(particles, particleMat)
    scene.add(points)
  
    // ── Animación ────────────────────────────────
    const animate = () => {
      animationId = requestAnimationFrame(animate)
  
      mesh.rotation.x      += 0.003
      mesh.rotation.y      += 0.005
      wireframe.rotation.x += 0.003
      wireframe.rotation.y += 0.005
      points.rotation.y    += 0.001
  
      renderer.render(scene, camera)
    }
    animate()
  
    // ── Responsive ───────────────────────────────
    window.addEventListener('resize', onResize)
  })
  
  function onResize() {
    const width  = mountRef.value.clientWidth
    const height = mountRef.value.clientHeight

    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)

    const newSize = getResponsiveScale()
    mesh.scale.setScalar(newSize / baseSize)
    wireframe.scale.setScalar(newSize / baseSize)
    baseSize = newSize
  }
  
  onBeforeUnmount(() => {
    cancelAnimationFrame(animationId)
    renderer.dispose()
    window.removeEventListener('resize', onResize)
  })
  </script>