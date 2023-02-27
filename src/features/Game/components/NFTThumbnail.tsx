// import * as fcl from '@onflow/fcl';
// import React, { useEffect } from 'react';

// // use npm published version
// import clsxm from '@/lib/clsxm';

// import { config } from '@/constants/mainnetFCL';
// import { NFTMedia } from '@/features/Game/constants/NFTs';

// import { NFTThumbnailInfo } from '../types/Types';

// type Props = {
//   className?: string;
//   NFTInfo: NFTThumbnailInfo;
// } & React.ComponentPropsWithRef<'div'>;

// const NFTThumbnail = ({ className, NFTInfo, ...rest }: Props) => {
//   fcl.config(config);

//   const getNFTMetadata = async () => {
//     const a = await fcl.query({
//       cadence: `
//           import TopShot from 0x0b2a3299cc857e29

//     pub fun main(playID: UInt32): {String:String} {

//         let metadata = TopShot.getPlayMetaData(playID: playID) ?? panic("Play doesn't exist")

//         return metadata
//     }
//           `,
//       args: (arg, t) => [arg('2640', t.UInt32)],
//     });

//     console.log('a', a);
//   };

//   //     const a = await fcl.query({
//   //       cadence: `
//   //       import TopShot from 0x0b2a3299cc857e29

//   // pub fun main(): [TopShot.Play] {
//   //     return TopShot.getAllPlays()
//   // }
//   //       `,
//   //     });

//   //     console.log('a', a);
//   // };

//   // Since for demo purposes we are using mainnet data with testnet account

//   useEffect(() => {
//     getNFTMetadata();
//   }, []);

//   return (
//     <>
//       <div
//         {...rest}
//         className={clsxm([
//           'relative w-full rounded-3xl border-2 border-primary-500 p-3 pb-[75px]',
//           className,
//         ])}
//       >
//         <div className='absolute -bottom-1 left-2/4 h-2 w-8/12 -translate-x-2/4 bg-dark'></div>
//         <div className='absolute -bottom-0 left-2/4 h-16 w-[calc(66.66666%+4px)] -translate-x-2/4 rounded-t-3xl border-2 border-b-0  border-primary-500'></div>
//         <div className='flex w-full flex-col items-center self-start'>
//           <span className='h2'>{NFTInfo.NFTName}</span>
//           <p className='text-[10px]'>{NFTInfo.NFTDescription}</p>
//           <video
//             className='mt-2 h-full w-full'
//             src={NFTMedia(NFTInfo.NFTId, 'video')}
//             autoPlay
//             loop
//             muted
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default NFTThumbnail;
