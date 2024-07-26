import React, { useState } from 'react'

interface ImagesProps {
  id: number;
  name: string;
  images : string;
}

export default function ChekinList() {
  const [images, setImages] = useState<ImagesProps[]>([]);

  

  return (
    <div>
      
    </div>
  )
}
