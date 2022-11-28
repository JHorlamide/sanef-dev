import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBank } from "types/bank";

type BankState = {
  banks: IBank[] | null;
};

const initialState: BankState = {
  banks: []
};

const bankSlice = createSlice({
  name: "bankSlice",
  initialState,
  reducers: {
    setBanks: (state, action: PayloadAction<IBank[] | null>) => {
      state.banks = action.payload;
    }
  }
});

export const { setBanks } = bankSlice.actions;
export default bankSlice.reducer;
