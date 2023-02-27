import React from 'react';

import NFTThumbnail from '@/features/Game/components/Quiz/NFTThumbnail';
import { user } from '@/features/Game/constants/user';

const NFTS = () => {
  return (
    <div className='space-y-0'>
      {user.NFTsEarned.map((NFTId, index) => {
        return <NFTThumbnail key={index} NFTFlowId={NFTId} showPrice={true} />;
      })}
    </div>
  );
};

export default NFTS;
