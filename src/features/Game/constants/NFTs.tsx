import { NFTThumbnailInfo } from '../types/Types';
// TODO: autotomize the acquisitions of NFTs from the blockchain

export const NFTMedia = (momentFlowID: string, mediaType: string) => {
  return `https://assets.nbatopshot.com/media/${momentFlowID}/${mediaType}`;
};

export const NFTs: { [key: string]: NFTThumbnailInfo[] } = {
  'Lebron James': [
    {
      NFTName: 'Lebron James',
      NFTId: '673595',
      NFTDescription:
        'Dunk · Oct 31 2021 Metallic Silver FE (Series 3) Fandom/901',
      NFTTotalPrice: '2.25',
    },
  ],
};
