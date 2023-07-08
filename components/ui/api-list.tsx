"use client"

import { useParams, useRouter } from "next/navigation";
import ApiAlert from "./api-alert";
import { useOrigin } from "@/hooks/use-origin";


interface ApiListProps {
  entityName: string;
  entityIdName: string;

}

const ApiList: React.FC<ApiListProps> = ({
  entityIdName,
  entityName
}) => {

  const params = useParams();
  const router = useRouter();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
   );
}

export default ApiList;
