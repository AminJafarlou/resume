export interface Item {
  title: string
  subItems?: Item[]
}

export const renderItems = (items: Item[], level: number = 0) => {
  const fontSize = ['text-base', 'text-sm', 'text-xs', 'text-[10px]']
  const textColor = ['text-gray-950', 'text-gray-900', 'text-gray-800', 'text-gray-700']
  const padding = `pl-${level * 4}`

  return (
    <ul
      className={`list-disc ${level === 0 ? 'px-8' : ''} 
      mb-2 space-y-1 ${padding} ${fontSize[level] || 'text-[10px]'} ${textColor[level] || 'text-'}`}
    >
      {items.map((item, index) => (
        <li key={index} className="ps-1">
          <div className={level === 0 ? `font-bold` : ''}>{item.title}</div>
          {item.subItems && renderItems(item.subItems, level + 1)}
        </li>
      ))}
    </ul>
  )
}
