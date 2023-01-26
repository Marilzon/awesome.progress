import "./styles.css"

interface FillProps {
  fill: number
}

export default function ProgressBar({fill}: FillProps) {
  return (
    <div className="progress__bar-container">
      <progress className="progress__bar" value={fill} max={100}>PROGRESSO</progress>
    </div>
  )
}
