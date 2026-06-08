import type { Filter } from '../types'

type Props = {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export default function TodoFilter({
                                     filter,
                                     onFilterChange
                                   }: Props) {

  const filters: { value: Filter, text: string }[] = [
    { value: 'all', text: '全部' },
    { value: 'active', text: '进行中' },
    { value: 'completed', text: '已完成' },
  ]

  return (
    <div>
      {
        filters.map(item => (
          <button
            key={ item.value }
            onClick={ () => onFilterChange(item.value) }
            style={ {
              background: item.value === filter ? '#999' : '#fff'
            } }
          >
            { item.text }
          </button>
        ))
      }
    </div>
  )
}
