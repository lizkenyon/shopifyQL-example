
import { vi } from "vitest";
import { mount } from "./test/mount";
import {ShopifyQLDataTable} from "../components/ShopifyQLDataTable";
import {useShopifyQuery} from "../hooks/useShopifyQuery";


vi.mock('../hooks/useShopifyQuery'); 

describe('Init states', ()=> {
    beforeEach(()=> {
        vi.mocked(useShopifyQuery).mockReturnValueOnce({status: "loading"}).mockReturnValueOnce({status: "error"});
        // mockQuery.mockReturnValueOnce({status: 'loading'}).mockReturnValue({status: 'error'});
    });

    it("Initially Renders Loading  ", async () => {
        const component = await mount(<ShopifyQLDataTable queryKey="test" title="test title" query={{}} />);
      
        expect(component).toContainReactText('Loading...');
    });
    
    it('Renders error if error', async ()=> {
    
        const component = await mount(<ShopifyQLDataTable queryKey="test" title="test title" query={{}} />);
        expect(component).toContainReactText('Error');
    })
})
