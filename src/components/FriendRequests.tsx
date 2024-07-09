'use client'

import { Check, UserPlus, X } from 'lucide-react'
import { FC, useState } from 'react'

interface FriendRequestsProps {
  incomingFriendRequests: IncomingFriendRequest[]
  sessionId: string | null | undefined
}

const FriendRequests: FC<FriendRequestsProps> = ({ incomingFriendRequests, sessionId }) => {
  const [friendRequests, setFriendRequests] = useState<IncomingFriendRequest[]>(
    incomingFriendRequests
  )

  return (
    <>
      {friendRequests.length === 0? (
        <p className='text-sm text-zinc-500'>Nothing to show here...</p>
      ) : (
        friendRequests.map((request) => (
          <div key={request.senderId} className='flex gap-4 items-center'>
            <UserPlus className='text-black'/>
            <p className='font-medium text-lg'>{request.senderEmail}</p>
            <button aria-label='accept friend' className='bg-indigo-600 hover:bg-indigo-700 rounded-full w-6 h-6 grid place-items-center transition shadow-md'>
              <Check className='font-semibold text-white w-3/4 h-3/4' />
            </button>
            <button aria-label='deny friend' className='bg-red-600 hover:bg-red-700 rounded-full w-6 h-6 grid place-items-center transition shadow-md'>
              <X className='font-semibold text-white w-3/4 h-3/4' />
            </button>
          </div>
        ))
      )}
    </>
  )
}

export default FriendRequests