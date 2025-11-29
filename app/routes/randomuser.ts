

  const KEY=process.env.NEXT_PUBLIC_USER_API;

  type loaderprops={
    gender:string
  }
  export type RetProps = {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    street_name: string;
    city: string;
    state: string;
    country: string;
    postcode: string | number;
  };
  email: string;
  phone: string;
};


  export const randomuserloader = async({gender}:loaderprops): Promise<RetProps>=>{
    if(!KEY)throw new Error('FailedAPIkey');
  const url = `${KEY}?gender=${gender}`;
    const res = await fetch(url);
    if(!res.ok)throw new Error('Failed2')     
    const data =await res.json();
  const user = data.results[0];
 return {
    gender: user.gender,
    name: {
      first: user.name.first,
      last: user.name.last,
    },
    location: {
      street_name: user.location.street.name,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
    },
    email: user.email,
    phone: user.phone,
  };
};