module.exports = async function () {
  const subs = [
    {
      _id: '1acs',
      title: 'Netflix',
      dateStart: '2022-01-01',
      dateEnd: '2022-02-01',
      color: '#F3477A',
      type: 'monthly',
      price: 13.99,
      URL: 'https://www.netflix.com/',
      note: 'family plan',
    },
    {
      _id: '2faw',
      title: 'Fitness World',
      dateStart: '2022-01-01',
      dateEnd: '2022-02-01',
      color: '#47F3D4',
      type: 'monthly',
      price: 13.99,
      URL: 'https://fitnessworld.ca/',
      note: 'personal training',
    },
  ];

  async function getAllSubs(accountId) {
    return {
      msg: `Successfully retrieved subscriptions`,
      subs,
    };
  }

  async function addNewSub(form, accountId) {
    return {
      msg: `Successfully added new subscription ${form.title}!`,
    };
  }

  async function updateSub(subId, form, accountId) {
    return {
      msg: `Successfully updated subscription ${form.title}!`,
    };
  }

  async function deleteSub(subId, accountId) {
    const queryOptions = { sub_id: subId };
    return {
      msg: `Successfully updated subscription with id ${queryOptions.sub_id}!`,
    };
  }

  const form = {
    title: 'Fitness World',
    dateStart: '2022-01-01',
    dateEnd: '2022-02-01',
    color: '#47F3D4',
    type: 'monthly',
    price: 13.99,
    URL: 'https://fitnessworld.ca/',
    note: 'personal training',
  };

  return { getAllSubs, addNewSub, updateSub, deleteSub, form };
};
