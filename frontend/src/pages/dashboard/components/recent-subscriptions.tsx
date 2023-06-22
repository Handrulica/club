const mockValues = [
  {
    address: '0xEC5e8Dd6b32B17847d7AFae983F402acDa6b5aAf',
    value: '100'
  },
  {
    address: '0xUJ5e8Dd6b51B17847d7AFbe983F402acDa6b5a3D',
    value: '100'
  },
  {
    address: '0xND6e8Dd6b32B17237d7AFae983F152acDa6b5nYR',
    value: '100'
  },
  {
    address: '0xMG3e8Dd6b16N17847d7JFae983F402acDa6b1bND',
    value: '100'
  },
]

export function RecentSubscriptions() {
  return (
    <div className="space-y-4 md:space-y-8">
      {
        mockValues.map((entry, id) =>
          <SubscriptionEntryCard key={id} {...entry} />
        )
      }
    </div>
  )
}

type SubscriptionEntry = {
  address: string;
  value: string;
}

const SubscriptionEntryCard: React.FC<SubscriptionEntry> = (entry) => {
  return (
    <div className="grid grid-cols-12 md:items-center">
      <div className="space-y-1 col-span-9">
        <p className="text-sm text-muted-foreground truncate">{entry.address}</p>
      </div>
      <div className="ml-auto font-medium col-span-3">+ {entry.value}$</div>
    </div>
  );
}
