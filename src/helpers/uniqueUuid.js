let UUID = 0;

export default function UniqueUUID () {
  const getUUID = () => {
    UUID++;
    return UUID;
  };

  return {
    getUUID
  };
};