import React from 'react'



interface saladProduct{
  id: number;
  name: string;
  image: string;
}



export const saladProducts: saladProduct[] = [
  {id: 1, name: 'product1', image: 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg'},
  {id: 2, name: 'product2', image: 'https://cdn.pixabay.com/photo/2015/05/20/18/35/salad-775949_1280.jpg'},
  {id: 3, name: 'product3', image: 'https://cdn.pixabay.com/photo/2022/06/07/20/58/salad-7249259_1280.jpg'},
  {id: 4, name: 'product4', image: 'https://cdn.pixabay.com/photo/2022/06/07/20/58/salad-7249259_1280.jpg'},
  {id: 5, name: 'product5', image: 'https://cdn.pixabay.com/photo/2018/06/19/10/16/lollo-rosso-3484159_640.jpg'},
  {id: 6, name: 'product6', image: 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_640.jpg'},
  {id: 7, name: 'product7', image: 'https://cdn.pixabay.com/photo/2015/01/03/18/19/salad-587669_640.jpg'},
  {id: 8, name: 'product8', image: 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg'},
  {id: 9, name: 'product9', image: 'https://cdn.pixabay.com/photo/2018/06/19/10/16/lollo-rosso-3484159_640.jpg'},
  {id: 10, name: 'product10', image: 'https://cdn.pixabay.com/photo/2015/01/03/18/19/salad-587669_640.jpg'},
  {id: 11, name: 'product11', image: 'https://cdn.pixabay.com/photo/2018/06/19/10/16/lollo-rosso-3484159_640.jpg'},
  {id: 12, name: 'product12', image: 'https://cdn.pixabay.com/photo/2018/06/19/10/16/lollo-rosso-3484159_640.jpg'},
  {id: 13, name: 'product13', image: 'https://cdn.pixabay.com/photo/2018/06/19/10/16/lollo-rosso-3484159_640.jpg'},
  {id: 14, name: 'product14', image: 'https://cdn.pixabay.com/photo/2023/09/25/07/55/salad-8274421_640.jpg'},
  {id: 15, name: 'product15', image: 'https://cdn.pixabay.com/photo/2019/12/11/16/20/parsley-4688651_640.jpg'},
  {id: 16, name: 'product16', image: 'https://cdn.pixabay.com/photo/2023/07/26/16/43/food-8151625_640.jpg'},
  {id: 17, name: 'product17', image: 'https://cdn.pixabay.com/photo/2021/10/13/16/08/vegan-salad-6707015_640.jpg'},
  {id: 18, name: 'product18', image: 'https://cdn.pixabay.com/photo/2016/08/28/10/49/takeaway-1625652_1280.jpg'},
]


interface SaladProductFlexProps {
  saladProducts: saladProduct[];
}

const SaladProductsLayout: React.FC<SaladProductFlexProps> = ({saladProducts})  => {
  return(
    <div className='saladProductFlexBox'>
      {saladProducts.map((saladproduct)=>(
        <div className='saladProductFlexBoxChild' key={saladproduct.id}>
          <img src={saladproduct.image} alt={saladproduct.name} style={{ width: '100%', height: 'auto' }} />
          <h2>{saladproduct.name}</h2>
        </div>
      ))}

    </div>
  )

  
}


export default SaladProductsLayout;