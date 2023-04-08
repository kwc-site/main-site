import { SWRConfig } from "swr";

export default function SWRWrapper({ children }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 60000,
        revalidateOnFocus: false,
        dedupingInterval: 5000,
      }}
    >
      {children}
    </SWRConfig>
  );
}
