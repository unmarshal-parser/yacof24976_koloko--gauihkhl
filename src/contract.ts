import {
  AffiliateSell as AffiliateSellEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  DelegateChanged as DelegateChangedEvent,
  DelegateVotesChanged as DelegateVotesChangedEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  Initialized as InitializedEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  AffiliateSell,
  Approval,
  ApprovalForAll,
  DelegateChanged,
  DelegateVotesChanged,
  EIP712DomainChanged,
  Initialized,
  Transfer
} from "../generated/schema"

export function handleAffiliateSell(event: AffiliateSellEvent): void {
  let entity = new AffiliateSell(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.affiliate = event.params.affiliate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelegateChanged(event: DelegateChangedEvent): void {
  let entity = new DelegateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delegator = event.params.delegator
  entity.fromDelegate = event.params.fromDelegate
  entity.toDelegate = event.params.toDelegate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelegateVotesChanged(
  event: DelegateVotesChangedEvent
): void {
  let entity = new DelegateVotesChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delegate = event.params.delegate
  entity.previousBalance = event.params.previousBalance
  entity.newBalance = event.params.newBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
