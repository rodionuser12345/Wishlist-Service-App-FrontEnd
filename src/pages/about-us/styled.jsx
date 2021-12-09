import styled from "styled-components"
import Padding from "../../components/common/Padding"

export const StyledAboutUs = styled(Padding)`
  background: ${({ theme }) => theme.colors.homeGradient};
  flex: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 8rem;
  padding-left: 20rem;
  padding-right: 20rem;
  padding-bottom: 20rem;
  text-transform: capitalize;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxxl}) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: ${({ theme }) => theme.space[5]};
    padding-right: ${({ theme }) => theme.space[5]};
  }
`

export const Title = styled.h2`
  text-align: center;
  width: 100%;
  font-weight: 900;
  font-size: 5rem;
  &&& {
    margin-top: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 4rem;
  }
`
export const Block = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  justify-content: space-between;
  /* justify-content: center; */
  /* align-items: center; */
  align-items: flex-start;
`

export const Position = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 900;
  font-size: 4rem;
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xss}) {
    font-size: 2rem;
  }
`

export const Avatars = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: flex-end;
  gap: 0.5rem;
  flex-wrap: wrap;
`
