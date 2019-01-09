# LokiNET Exit Node Guide

Exit nodes allow users to make requests to the wider internet and return those requests through a mixnet. If used correctly, exit nodes allow users to browse the internet privately and without the users IP address being exposed to the server.

## Client 

Lokinet clients can use exit nodes without the need to host a service node.

### Configuration

To use an exit node as a client, add the following option to the `[network]` section in `lokinet.ini` 

     exit-node=exitnodehexpublickeygoeshere
     strict-connect=firsthophexpublickeygoeshere
     
This sets to use an exit node by its public identity key and sets a strict first hop by its public identity key.
We set a strict first hope so that we can easily set up the routing table.
     
##### Toynet exit public key list by region:

Romania:

* `b61df944b8547af56201c6c7528ed86289566dcf73358c5ef8e3b4e628671399`
    
##### Toynet first hop public key list with IP

* `8df8ca1cc9d39d381f0efafdf58e2569457675a1e543189bea8279522aee6461` `167.114.185.46`

* `3dcb5a34d015a7bbb4636be83991e00cbeff13fe7834e0d5452ffe9a5af5a5be` `162.243.164.223`
  
  
### Set up routes

In this example your first hop is at `162.243.164.223` and your network's default gateway is `192.168.0.1`

#### Windows

// TODO: document me

#### OS X

// TODO: document me

#### Linux

Set the route that routes everything over lokinet do the following as root:

    # ip route add 162.243.164.223 via 192.168.0.1
    # ip route del default
    # ip route add default dev lokitun0

To unset the route everything over lokinet route do the following as root:

    # ip route del default
    # ip route add default via 192.168.0.1

## Prequesites

// TODO: technical prequesites goes here

## Technical

// TODO: technical overview about exit nodes

### Bandwidth

// TODO: notes about bandwidth

### OS Limits (?)

// TODO: talk about OS level limits for IPv4 exits

// TODO: talk about ipv6 exit requirements, i.e. a /120 to /64

## Legal

Running a Lokinet Exit node simply means that you are requesting and relaying packets of data on someone else's behalf, a vast majority of the traffic in mixnets comprised of legal and non malicious traffic. Statically over the course of running a [Service Node](../../ServiceNodes/SNOverview.md) you are likely to run into a few users who abuse their anonymity to send or receive information that may be explicitly malicious, therefor it is important that we discuss the legal implications of this malicious traffic.

In most countries Exit nodes are viewed in much the same way as ISP's are, that is that they are usually classed as data transmitters, which makes them exempt from criminal or civil liability based on the data they transmit. This means they are also covered by exceptions in the EUCD and DMCA laws which stipulate content regulation on the internet in the US and Europe respectively.

Despite this its important to consider that unlike ISP's exit node operators usually do not have large legal teams and a budget to fight prosecutions in court. Although a legal suit has never been brought against a Tor exit node operator, these are risks that each operator must control for.

For this reason you should always check the laws of the relevant country you are operating your Service Node out of. If you run into legal challenges we recommend contacting the EFF who may be interested in hearing a case of Exit Node prosecution.

Although all relevant information, it still stands as likely the most contact you are going to receive as you run an exit node is with your ISP or VPS provider who is likely to forward DMCA takedown notices, or abuse requests to the email address you used to sign up with. 

### Disclaimer

The Loki foundation or the writers of this guide are not responsible for any legal implications you may face because you operate a Loki Service Node. 

### Email Templates

If you decided to run a Service Node with exit functionality there are a couple of common abuse emails you will run into, so its a good idea to reduce the time spent answering emails to use some available templates.

####**Copyright infringement Email Response**

**European ISP**

```
Dear [ISP]:

Thank you for forwarding me the notice you received from [copyright claimant] regarding [content]. I would like to assure you that I am not hosting the claimed infringing materials, and furthermore, both the Digital Millennium Copyright Act's ("DMCA") and the European Union Copyright Directive (“EUCD”) safe harbors likely protect you from liability arising from this complaint. The notice is likely based upon misunderstandings about the law and about some of the software I run.

As you may know as part of the European Union Copyright Directive exceptions are provided per Article 5, these exceptions are mandatory for each member state. These exceptions allow for “Temporary acts of reproduction referred to in Article 2, which are transient or incidental [and] an integral and essential part of a technological process and whose sole purpose is to enable:
a transmission in a network between third parties by an intermediary”. These Laws protect both Internet Service providers and similar intermediaries who simply relay traffic.


The notification you received is certainly not proof of any copyright infringement; a notice claiming infringement is not the same as a determination of infringement. I have not infringed any copyrights and do not intend to do so. Therefore, you should continue to be protected under the EUCD Article 5  without taking any further action.

You may be curious about what prompted the faulty notice. It was likely triggered by a program I run called Lokinet. Lokinet is a software that helps users to enhance their privacy, security, and safety online. It does not host any content. Rather, it is part of a network of nodes called Service Nodes that operate on the Internet and simply pass packets among themselves before sending them to their destinations, just as any Internet intermediary does. The difference is that Lokinet tunnels the connections such that no hop can learn both the source and destination of the packets, giving users protection from nefarious snooping on network traffic. The result is that, unlike most other Internet traffic, the final IP address that the recipient receives is not the IP address of the sender. Lokinet protects users against hazards such as harassment, spam, and identity theft. The Lokinet software is developed by the Loki foundation a non for profit organization, and run by community Service Node operators. I hope, as an organization committed to protecting the privacy of its customers, you'll agree that this is a valuable technology.

Thank you for working with me on this matter. As a loyal subscriber, I appreciate your notifying me of this issue and hope that the protections of DMCA 512 put any concerns you may have to rest. If not, please contact me with any further questions.

Very truly yours,
Your customer, [User]
```

**American ISP**


```
Dear [ISP]:

Thank you for forwarding me the notice you received from [copyright claimant] regarding [content]. I would like to assure you that I am not hosting the claimed infringing materials, and furthermore, the Digital Millennium Copyright Act's ("DMCA") safe harbors likely protect you from liability arising from this complaint. The notice is likely based upon misunderstandings about the law and about some of the software I run.

As you know, the DMCA creates four "safe harbors" for service providers to protect them from copyright liability for the acts of their users, when the ISPs fulfill certain requirements. (17 U.S.C. § 512) The DMCA's requirements vary depending on the ISP's role. You may be familiar with the "notice and takedown" provisions of section 512(c) of the DMCA; however, those do not apply when an ISP merely acts as a conduit. Instead, the "conduit" safe harbor of section 512(a) of the DMCA has different and less burdensome eligibility requirements, as the D.C. Circuit Court of Appeals held in RIAA v. Verizon (see https://www.eff.org/sites/default/files/filenode/RIAA_v_Verizon/20030121-riaa-v-verizon-order.pdf) and the Eighth Circuit Court of Appeals confirmed in RIAA v. Charter (see https://w2.eff.org/IP/P2P/Charter/033802P.pdf).

Under DMCA 512(a), service providers like you are typically protected from damages for copyright infringement claims if you also maintain "a policy that provides for termination in appropriate circumstances of subscribers and account holders of the service provider's system or network who are repeat infringers." If you have and implement such a policy, and you otherwise qualify for the safe harbor, you should be free from fear of copyright damages.

As for what makes a reasonable policy, as the law says, it's one that terminates subscribers who are repeat infringers. The notification you received is certainly not proof of the "repeat infringement" that is required under the law before you need to terminate my account. In fact, it's not even proof of any copyright infringement; a notice claiming infringement is not the same as a determination of infringement. I have not infringed any copyrights and do not intend to do so. Therefore, you should continue to be protected under the DMCA 512(a) safe harbor without taking any further action.

You may be curious about what prompted the faulty notice. It was likely triggered by a program I run called Lokinet. Lokinet is a software that helps users to enhance their privacy, security, and safety online. It does not host any content. Rather, it is part of a network of nodes called Service Nodes that operate on the Internet and simply pass packets among themselves before sending them to their destinations, just as any Internet intermediary does. The difference is that Lokinet tunnels the connections such that no hop can learn both the source and destination of the packets, giving users protection from nefarious snooping on network traffic. The result is that, unlike most other Internet traffic, the final IP address that the recipient receives is not the IP address of the sender. Lokinet protects users against hazards such as harassment, spam, and identity theft. The Lokinet software is developed by the Loki foundation a non for profit organization, and run by community Service Node operators. I hope, as an organization committed to protecting the privacy of its customers, you'll agree that this is a valuable technology.

Thank you for working with me on this matter. As a loyal subscriber, I appreciate your notifying me of this issue and hope that the protections of DMCA 512 put any concerns you may have to rest. If not, please contact me with any further questions.```

Very truly yours,
Your customer, [User]
```
**General Statement**

```
The IP address in question is a Loki exit node.
https://www.torproject.org/overview.html

There is little we can do to trace this matter further. As can be seen
from the overview page, Lokinet is designed to make tracing of
users impossible. The Loki network is run by hundreds of node operators who
use the free software provided by the Loki Foundation to operate Lokinet routers and exit nodes.
Client connections are routed through multiple relays, and are
multiplexed together on the connections between relays. The system
does not record logs of client connections or previous hops.

This is because Lokinet is a censorship resistance, privacy,
and anonymity system it can be used by whistle blowers, journalists, abuse victims, stalker
Targets, law enforcement, just to name a few.

Unfortunately, some people misuse the network. However, compared to
the rate of legitimate use the fraction of misuse is small and abuse complaints are rare. however because of the nature of anonymity networks little can be done to trace the origin of these malicious users.

```
//TODO: Add additional templates once DNSRBL is added


### Best Practices

// TODO: insert best practices here

// TODO: abuse complaints

// TODO: Automated DMCA Spam Notices

// TODO: traffic shaping (?)

// TODO: ipv6 implications

### Worst Case Emergencies

// TODO: link to EFF resources

// TODO: insert info about handling police here

// TODO: don't talk to the police video goes here
