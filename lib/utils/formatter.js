export const formatDate = (isoString) => {
  // ISO 8601 tarihini Date nesnesine dönüştür
  const date = new Date(isoString)

  // Aylar ve günler için sıfır eklemek için
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Aylar 0-11 arası olduğu için 1 eklenir
  const year = date.getFullYear()

  // İstediğiniz formatta birleştirme
  return `${day}-${month}-${year}`
}
