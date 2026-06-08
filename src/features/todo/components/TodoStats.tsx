type Props = {
  total: number;
  active: number;
  completed: number;
}

export default function TodoStats({
                                    total,
                                    active,
                                    completed
                                  }: Props) {
  return (
    <div>
      <span>全部： { total }</span>
      <span>进行中： { active }</span>
      <span>已完成： { completed }</span>
    </div>
  )

}
