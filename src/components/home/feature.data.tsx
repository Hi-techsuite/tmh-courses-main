import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Free e-books',
    description:
      '10 Free e-books covering various topics from stocks trading to commodities and crypto trading. Campaigns must be created around those and provided as a gimmick to clients',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Prop trading',
    description:
      "We provide you with the best proprietary trading platform and the required training to start enjoying funded account and live the better live you've always wanted",
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'AI Trading',
    description:
      'Master pros and cons of AI Trading, be ahead of your contemporaries. Either as a beginner or an experienced trader we have you covered.',
    icon: <ArtTrackIcon />,
  },
]
