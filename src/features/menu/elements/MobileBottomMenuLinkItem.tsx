'use client';

import MobileBottomMenuItemStyleBase from '@/features/menu/elements/MobileBottomMenuItemStyleBase';
import { styled } from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const StyledLink = styled(NextLink)`
  align-items: center;
  color: black;
  text-decoration: none;

  display: flex;
  flex-direction: column;

  &.active {
    font-weight: 700;
  }

  & > svg {
    aspect-ratio: 1 / 1;
    width: 41px;
    height: 41px;
  }
`;

interface Props {
  href: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
}

const MobileBottomMenuLinkItem = ({ href, icon, activeIcon }: Props) => {
  const pathname = usePathname();

  return (
    <MobileBottomMenuItemStyleBase>
      <StyledLink
        href={href}
        className={href === pathname ? 'active' : undefined}
      >
        {activeIcon && href === pathname ? activeIcon : icon}
      </StyledLink>
    </MobileBottomMenuItemStyleBase>
  );
};

export default MobileBottomMenuLinkItem;
