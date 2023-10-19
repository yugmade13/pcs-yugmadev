import { Notif, Status, Submission } from '@/type';

const statuses: Status = {
  paid: 'paid',
  rejected: 'rejected',
  processed: 'processed',
  approved: 'approved',
  reviewed: 'reviewed',
}

const submission: Submission[] = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias, optio! Ab, architecto atque dignissimos dolores ex itaque porro quasi quibusdam ratione rem? Animi, dignissimos fuga inventore nemo nisi voluptatibus.'
  },
  {
    title: 'description'
  }
]

const notifications: Notif[] = [
  {
    status: statuses.paid,
    title: 'Reimbursement',
    body: function () {
      return `Your submissions "${submission[0].title.substring(0, 26)}..." with the total cost 50.000 has been <strong>${this.status}</strong>. Please check your BRIMO application. Thank you.`;
    },
    hasBeenRead: false,
    image: 'reimbursement.png',
  },
  {
    status: statuses.rejected,
    title: 'Reimbursement',
    body: function () {
      return `Your submissions "${submission[1].title}" has been <strong>${this.status}</strong>. Please click for details.`
    },
    hasBeenRead: true,
    image: 'reimbursement.png',
  },
  {
    status: statuses.processed,
    title: 'Reimbursement',
    body: function () {
      return `Your submissions will be <strong>${this.status}</strong> according to the reimbursement schedule. Please wait.`
    },
    hasBeenRead: false,
    image: 'reimbursement.png',
  },
  {
    status: statuses.approved,
    title: 'Sickness',
    body: function () {
      return `Your submissions have been <strong>${this.status}</strong> by the Superior`
    },
    hasBeenRead: false,
    image: 'sickness.png',
  },
  {
    status: statuses.rejected,
    title: 'Sickness',
    body: function () {
      return `Your submissions have been <strong>${this.status}</strong>. Please confirm with your Superior.`
    },
    hasBeenRead: true,
    image: 'sickness.png',
  },
  {
    status: statuses.reviewed,
    title: 'Sickness',
    body: function () {
      return `Your submissions are being <strong>${this.status}</strong> to the Superior for the approval process, please wait.`
    },
    hasBeenRead: true,
    image: 'sickness.png',
  },
  {
    status: statuses.approved,
    title: 'Overtime',
    body: function () {
      return `Your submissions have been <strong>${this.status}</strong> by the Superior`
    },
    hasBeenRead: false,
    image: 'overtime.png',
  },
  {
    status: statuses.rejected,
    title: 'Overtime',
    body: function () {
      return `Your submissions have been <strong>${this.status}</strong>. Please confirm with your Superior.`
    },
    hasBeenRead: true,
    image: 'overtime.png',
  },
  {
    status: statuses.reviewed,
    title: 'Overtime',
    body: function () {
      return `Your submissions are being <strong>${this.status}</strong> to the Superior for the approval process, please wait.`
    },
    hasBeenRead: true,
    image: 'overtime.png',
  },
  {
    status: statuses.processed,
    title: 'Overtime',
    body: function () {
      return `Your submissions have been <strong>${this.status}</strong> by the Superior`
    },
    hasBeenRead: true,
    image: 'overtime.png',
  },
];

export default notifications;

