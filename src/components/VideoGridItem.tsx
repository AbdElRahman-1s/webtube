import { formatDuration } from '../utils/FormatDuration'
import { formatTimeAgo } from '../utils/formatTimeAgo';

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  }
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}


const VIEW_FORMATTER = new Intl.NumberFormat(undefined,{notation:"compact"
})


function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl
}: VideoGridItemProps) {

  console.log(channel.profileUrl);

  return (
    <div className="flex flex-col gap-2">
      <a
        href={`/watch?v=${id}`}
        className="relative aspect-video "
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="block h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm p-0.5 rounded">
          {formatDuration(duration)}
        </div>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src={channel.profileUrl}
            alt={channel.name}
            referrerPolicy="no-referrer"
          />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className='font-bold'>
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm ">
            {channel.name}
          </a>
          <div className='text-secondary text-sm'>
            {VIEW_FORMATTER.format(views)} Views · {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoGridItem