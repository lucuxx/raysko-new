export default function (_to, _from, savedPosition) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(savedPosition || { x: 0, y: 0 }), 0)
  })
}
