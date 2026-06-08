type Props = {
  keyword: string;
  onKeywordChange: (value: string) => void;
}

export default function TodoSearch({
                                     keyword,
                                     onKeywordChange
                                   }: Props) {
  return (
    <input
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
      placeholder="搜索任务..."
    >
    </input>
  )
}
