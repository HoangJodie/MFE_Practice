import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCartItem, removeCartItem, updateCartItemDelivery } from "../api";
import { CART_KEYS, PAYMENT_SUMMARY_KEYS } from "../queryKeys";
import { CartItemDetail } from "@shared/api";

export const useAddToCart = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: addCartItem,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: CART_KEYS.all });
      qc.invalidateQueries({ queryKey: PAYMENT_SUMMARY_KEYS.all });
    },
  });
};

export const useRemoveCartItem = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (productId: string) => removeCartItem(productId),
    onMutate: async (productId: string) => {
      await qc.cancelQueries({ queryKey: CART_KEYS.all });
      const prev = qc.getQueryData<CartItemDetail[]>(CART_KEYS.all);
      qc.setQueryData<CartItemDetail[]>(CART_KEYS.all, (old: CartItemDetail[] | undefined) =>
        (old ?? []).filter((i) => i.productId !== productId)
      );
      return { prev };
    },
    onError: (_err, _vars, ctx: { prev: CartItemDetail[] | undefined } | undefined) => {
      if (ctx?.prev) qc.setQueryData(CART_KEYS.all, ctx.prev);
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: CART_KEYS.all });
      qc.invalidateQueries({ queryKey: PAYMENT_SUMMARY_KEYS.all });
    },
  });
};

export const useUpdateDeliveryOption = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ productId, deliveryOptionId }: { productId: string; deliveryOptionId: number }) =>
      updateCartItemDelivery(productId, deliveryOptionId),
    onMutate: async ({ productId, deliveryOptionId }) => {
      await qc.cancelQueries({ queryKey: CART_KEYS.all });
      const prev = qc.getQueryData<CartItemDetail[]>(CART_KEYS.all);
      qc.setQueryData<CartItemDetail[]>(CART_KEYS.all, (old: CartItemDetail[] | undefined) =>
        (old ?? []).map((i) =>
          i.productId === productId ? { ...i, deliveryOptionId } : i
        )
      );
      return { prev };
    },
    onError: (_err, _vars, ctx: { prev: CartItemDetail[] | undefined } | undefined) => {
      if (ctx?.prev) qc.setQueryData(CART_KEYS.all, ctx.prev);
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: CART_KEYS.all });
      qc.invalidateQueries({ queryKey: PAYMENT_SUMMARY_KEYS.all });
    },
  });
};
