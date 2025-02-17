import {NextUIProvider} from "@nextui-org/react";
import { ReactNode } from 'react';
//create a provider for Next UI
export default function NextProviders({ children }: { children: ReactNode }) {
    return <NextUIProvider>{children}</NextUIProvider>;
};