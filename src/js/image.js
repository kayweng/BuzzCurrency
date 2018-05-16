import aws from 'src/axios/axios_db'

function readImageUrlData (url) {
  var config = {
    headers: { 'Authorization': '' },
    responseType: 'blob'
  }

  return new Promise((resolve, reject) => {
    aws.get(url, config).then(response => {
      var reader = new FileReader()
      reader.readAsDataURL(response.data)
      reader.onload = (e) => {
        resolve(e.target.result)
      }
    }, error => {
      reject(error)
    })
  })
}

function readImageFileData (data) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader()
    reader.readAsDataURL(data)
    reader.onload = (e) => {
      resolve(e.target.result)
    }
  })
}

export { readImageUrlData, readImageFileData }
