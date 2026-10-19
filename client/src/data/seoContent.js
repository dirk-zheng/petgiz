export function slugify(value=''){return value.toLowerCase().replace(/["“”']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
export function productSlug(product){return slugify(product?.name||product?.id||'pet-essential')}

export const servicePages={
  'fit-and-size-guide':{
    title:'Pet Product Fit & Sizing',eyebrow:'Comfort starts with a good fit',
    intro:'Learn how to measure your companion and compare their measurements with the dimensions listed for harnesses, carriers and backpacks.',image:'/pets/harness-leash.svg',
    sections:[
      ['Measure your pet','Use a soft measuring tape and follow the measurement points on the product listing. Keep the tape snug but not tight.'],
      ['Compare product dimensions','Check chest measurements for harnesses and interior dimensions for carriers. Consider your pet’s posture and room to move.'],
      ['Introduce new gear gently','Let your pet explore a new harness or carrier at home before heading out. Keep early sessions short and positive.'],
    ],
  },
  'wholesale-private-label':{
    title:'Pet Travel Essentials',eyebrow:'For small adventures and longer journeys',
    intro:'Find thoughtful carriers, backpacks and accessories for day trips and everyday travel with your companion.',image:'/pets/pet-carrier.svg',
    sections:[
      ['Pick a comfortable carrier','Compare interior dimensions and weight guidance with your pet’s measurements.'],
      ['Make it familiar','Set the carrier out at home with bedding or a favorite treat so your pet can explore it in their own time.'],
      ['Plan your route','Check any transport provider’s current pet travel requirements and measure the carrier externally if needed.'],
      ['Keep essentials close','A travel kit can help keep a collapsible bowl, water and cleanup supplies together.'],
    ],
  },
  'quality-and-care':{
    title:'Care & Everyday Use',eyebrow:'Keep favorite gear ready to go',
    intro:'Simple care and thoughtful introductions can help your Petgiz gear stay ready for everyday adventures.',image:'/pets/travel-set.svg',
    sections:[
      ['Follow product care guidance','Materials vary by product. Follow the care label or instructions listed on the product page.'],
      ['Dry before storing','Let harnesses, carriers and bowls dry fully before packing away.'],
      ['Check before each outing','Make sure buckles, clips, zippers and straps are secure and in good condition.'],
    ],
  },
};
