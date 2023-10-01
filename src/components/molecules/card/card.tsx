import React, { Children } from 'react'
import { ImPlus } from 'react-icons/im';
import "../card/card.css"

interface ICard {
    children: string | JSX.Element
    cardTitle: string;
}
const CardSkeleton = ({
    children, cardTitle}:ICard) => {

  return (
    <div className='card'>
    <div className='title'>{cardTitle}</div>
    <div className='cardBody'>

        {children}

<div className='addQuestionBtn'>
<ImPlus />
<div>Add a question</div>
</div>
    </div>
    </div>
  )
}

export default CardSkeleton