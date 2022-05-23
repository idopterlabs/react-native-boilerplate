import { Card } from '@typings/Requests';

export const mockedUpdateCard = jest.fn();
jest.mock('@contexts/CardContext', () => {
  const react = jest.requireActual('react');
  return {
    useCard: () => {
      // @ts-ignore
      const [card, setCard] = react.useState<Card>({
        balance: 0.0,
        blocked_at: null,
        canceled_at: null,
        card_number: '8699070000000000',
        formatted_card_number: '8699 0700 0000 0000',
        id: '17f29212-af52-43d2-9de5-57723ddc9d91',
        masked_card_number: '8699 **** **** 0000',
        requested_at: null,
        received_at: null,
      });

      return {
        updateCard: (newCard: Card) => {
          setCard(newCard);
          mockedUpdateCard();
        },
        isLoadCard: false,
        card: card,
      };
    },
  };
});

export {};
