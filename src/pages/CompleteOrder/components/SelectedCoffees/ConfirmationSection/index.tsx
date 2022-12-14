import { Button } from "../../../../../components/Button";
import { RegularText } from "../../../../../components/Typography";
import { useCart } from "../../../../../hooks/useCart";
import { formatMoney } from "../../../../../utils/FormatMoney";
import { ConfirmationSectionContainer } from "./styles";

const deliveryPrice = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = deliveryPrice + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(deliveryPrice)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>
      <Button
        type="submit"
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
      />
    </ConfirmationSectionContainer>
  )
}