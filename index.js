//SEPARAR POR CATEGORIA
let Frutas = []
let Bebidas = []
let Higiene = []

function separateByCategory(listObj){
  for(let i in listObj){
    let obj = listObj[i]
    if(obj.category == 'Higiene'){
      Higiene.push(obj)
    }else if (obj.category == 'Bebidas'){
      Bebidas.push(obj)
    }else {
      Frutas.push(obj)
    }
  }
}

separateByCategory(products)

let tagUlFrutas = document.createElement('ul')
let tagUlBebidas = document.createElement('ul')
let tagUlHigiene = document.createElement('ul')

let mainFrutas = document.querySelector('.fruits')
let mainBebidas = document.querySelector('.drinks')
let mainHigiene = document.querySelector('.hygiene')

mainFrutas.append(tagUlFrutas)
mainBebidas.append(tagUlBebidas)
mainHigiene.append(tagUlHigiene)


function renderLi(list, reference){
  for(let i = 0; i < list.length; i++){
    let produtos = list[i]
    let template = criateTemplate(produtos)
    reference.appendChild(template)
    
  }

}

renderLi(Frutas, tagUlFrutas)
renderLi(Bebidas, tagUlBebidas)
renderLi(Higiene, tagUlHigiene)



function criateTemplate(produtos){
  let title    = produtos.title
  let category = produtos.category
  let image    = produtos.image
  let price    = produtos.price

  let tagUl     = document.createElement('ul')
  let tagLi     = document.createElement('li')
  let tagImg    = document.createElement('img')
  let tagMain   = document.createElement('main')
  let tagH1     = document.createElement('h1')
  let tagH5     = document.createElement('h5')
  let tagStrong = document.createElement('strong')

  tagLi.classList.add('product')
  tagMain.classList.add('product-main')
  tagH1.classList.add('product-title')
  tagH5.classList.add('product-category')
  tagStrong.classList.add('product-price')

  image === undefined? tagImg.src = './img/products/no-img.svg': tagImg.src = image

  tagH1.innerText     = title
  tagH5.innerText     = category
  tagStrong.innerText = price

  tagMain.append(tagH1, tagH5, tagStrong)
  tagLi.appendChild(tagImg)
  tagLi.appendChild(tagMain)


  return tagLi

}

