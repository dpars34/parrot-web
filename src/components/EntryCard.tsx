interface IEntryCardProps {
  phraseTitle: string,
  phraseStandard: string,
  phraseExplain: string,
}

const EntryCard: React.FC<IEntryCardProps> = (props) => {
  return (
    <div className="bg-white p-6 font-line w-[20rem] rounded-lg"> 
      {/* REMOVE THE 20REM */}
      <h2 className="font-bold h-[72px]">{ props.phraseTitle }</h2>
      <div className="h-12">{ props.phraseStandard }</div>
    </div>
  )
}

export default EntryCard