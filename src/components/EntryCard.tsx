interface IEntryCardProps {
  item: {
    phraseTitle: string,
    phraseStandard: string,
    phraseExplain: string,
    userName: string,
    phraseAccent: string,
    likeCount: number,
    commentsCount: number,
  }
}

const EntryCard: React.FC<IEntryCardProps> = ({ item }) => {
  return (
    <div className="bg-white p-6 font-line rounded-lg text-primaryText"> 
      <h2 className="font-bold text-2xl	h-[4.5rem]">{ item.phraseTitle }</h2>
      <div className="font-bold h-12 text-secondaryText">{ item.phraseStandard }</div>
      <div className="text-sm h-12 text-secondaryText">{ item.phraseExplain }</div>
      <div className="user-info grid grid-cols-2 pb-2 border-b text-secondaryText gap-4">
        <div className="flex items-center gap-1	">
          <span className="material-icons">account_circle</span>
          <span className="truncate font-bold">{ item.userName }</span>
        </div>
        <div className="flex items-center gap-1	">
          <span className="material-icons">record_voice_over</span>
          <span className="truncate font-bold">{ item.phraseAccent }</span>
        </div>
      </div>
      <div className="user-info grid grid-cols-2 pt-2 gap-4">
        <div className="flex items-center gap-1 text-secondary">
          <span className="material-icons">favorite</span>
          <span className="text-secondaryText">{ item.likeCount }</span>
        </div>
        <div className="flex items-center gap-1 text-primary">
          <span className="material-icons">chat</span>
          <span className="text-secondaryText">{ item.commentsCount }</span>
        </div>
      </div>
    </div>
  )
}

export default EntryCard