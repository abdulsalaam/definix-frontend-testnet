import React from 'react'
import styled from 'styled-components'
import { Heading } from 'uikit-dev'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import NftList from './components/NftList'

const StyledHero = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const Collectibles = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledHero>
        <Heading as="h1" size="xxl" color="secondary">
          {TranslateString(999, 'Definix Collectibles')}
        </Heading>
      </StyledHero>
      <NftList />
    </Page>
  )
}

export default Collectibles