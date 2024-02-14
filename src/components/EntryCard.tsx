import { IEntry } from '../../types'

interface IEntryCardProps {
  item: IEntry,
}

const EntryCard: React.FC<IEntryCardProps> = ({ item }) => {
  return (
    <div className="bg-white p-6 font-line rounded-lg text-primaryText"> 
      <h2 className="font-bold text-2xl	h-[4.2rem] line-clamp-2">{ item.phrase_title }</h2>
      <div className="font-bold h-12 text-secondaryText line-clamp-2">{ item.phrase_standard }</div>
      <div className="text-sm h-11 text-secondaryText line-clamp-2">{ item.phrase_explain }</div>
      <div className="user-info grid grid-cols-2 pb-2 border-b text-secondaryText gap-4">
        <div className="flex items-center gap-1	">
          <span className="material-icons">account_circle</span>
          <span className="truncate font-bold">{ item.user_name }</span>
        </div>
        <div className="flex items-center gap-1	">
          <span className="material-icons">record_voice_over</span>
          <span className="truncate font-bold">{ item.phrase_accent }</span>
        </div>
      </div>
      <div className="user-info grid grid-cols-2 pt-2 gap-4">
        <div className="flex items-center gap-1 text-secondary">
          <span className="material-icons">favorite</span>
          <span className="text-secondaryText">{ item.like_count }</span>
        </div>
        <div className="flex items-center gap-1 text-primary">
          <span className="material-icons">chat</span>
          <span className="text-secondaryText">{ item.comments_count }</span>
        </div>
      </div>
    </div>
  )
}

export default EntryCard